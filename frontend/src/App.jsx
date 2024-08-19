import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import NewCard from './components/NewCard'; 
import axios from 'axios';

const App = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ping/cards');
      console.log(response.data);
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };


  const handleCardCreated = () => {
    fetchCards();  // Fetch the cards immediately after a new one is created
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const filteredCards = search
    ? cards.filter(card => card.title.toLowerCase().includes(search.toLowerCase()))
    : cards;

  return (
    <>
      <Header />
   
        <Routes>
          <Route
            path="/"
            element={
              <div>
              <div className="main-content">
                <h1>How can we help?</h1>
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                </div>
                <div className="card-container">
                  {filteredCards.length > 0 ? (
                    filteredCards.map(card => (
                      <Card key={card._id} title={card.title} description={card.description} />
                    ))
                  ) : (
                    <p>No cards found matching your search.</p>
                  )}
                </div>
             </div>
            }
          />
          <Route path="/new-card" element={<NewCard  onCardCreated={handleCardCreated}/>}/>
        </Routes>
     
      <Footer />
    </>
  );
};

export default App;
