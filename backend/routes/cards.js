const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// POST /cards - Create a new card
router.post('/cards', async (req, res) => {
  try {
    const { title, description } = req.body;

    // Check if a card with the same title already exists
    const existingCard = await Card.findOne({ title });
    if (existingCard) {
      return res.status(400).json({ message: 'Card with this title already exists' });
    }

    // Create and save the new card
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ message: 'Error creating card' });
  }
});

// GET /cards - Retrieve all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find(); // Fetch all cards from the database
    res.status(200).json(cards);
  } catch (error) {
    console.error('Error retrieving cards:', error);
    res.status(500).json({ message: 'Error retrieving cards' });
  }
});

module.exports = router;

 router.get('/cards/:title', async (req, res) => {
   try {
     const { title } = req.params;
     const card = await Card.findOne({ title });
     if (!card) return res.status(404).json({ message: 'Card not found' });
     res.status(200).json(card);
   } catch (error) {
     res.status(500).json({ message: 'Error retrieving card', error });
   }
 });

module.exports = router;
