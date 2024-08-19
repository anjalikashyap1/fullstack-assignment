
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const NewCard = ({ onCardCreated }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleRequestClick1 = () => {
    navigate('/'); 
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/ping/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        alert('Card created successfully!');
        setTitle('');
        setDescription('');
      } else {
        alert('Error creating card');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="new-card-container">
      <div className="new-card">
        <h2>Create a New Card</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
          <button className='show-cards' onClick={() => {
              onCardCreated();  
              navigate('/');
            }}
          >Show All Cards</button>
          
        </form>
        
      </div>
    </div>
  );
};

export default NewCard;
