import React, { useState } from 'react';
import './App.css';
import Flashcard from './Flashcard.tsx';

const App = () => {
    // Sample flashcards data
    const flashcards = [
        { question: 'What is the largest land animal?', answer: 'Elephant', index: 1 },
        { question: 'What animal is known as the king of the jungle?', answer: 'Lion', index: 2 },
        { question: 'What animal can fly backward?', answer: 'Hummingbird', index: 3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to display a random card
    const showRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCurrentIndex(randomIndex);
    };

    return (
        <div className="body">
            <h1 className="title">Animal Trivia</h1>
            <p className="description">Learn fun facts about animals! Total cards: {flashcards.length}</p>
            <div className="flashcards-container">
                <Flashcard flash={flashcards[currentIndex]} />
            </div>
            <button className="next-button" onClick={showRandomCard}>Next</button>
        </div>
    );
};

export default App;
