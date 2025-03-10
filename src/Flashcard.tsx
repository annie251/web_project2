import React, { useState } from 'react';
import './Flashcard.css';

interface FlashcardProps {
    flash: {
        question: string;
        answer: string;
        index: number;
    };
}

const Flashcard: React.FC<FlashcardProps> = ({ flash }) => {
    const [isQuestion, setIsQuestion] = useState(true);

    const switchSides = () => {
        setIsQuestion(!isQuestion);
    };

    return (
        <div className="flash-card" onClick={switchSides}>
            <h4>{isQuestion ? flash.question : flash.answer}</h4>
        </div>
    );
};

export default Flashcard;