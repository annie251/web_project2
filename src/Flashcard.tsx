import React from 'react';
import './Flashcard.css';
import { useState } from 'react'

interface FlashcardProps {
    flash: {
        question: string; 
        answer: string; 
        index: number; 
        isQuestion: boolean;   
    }
}

const Flashcard: React.FC<FlashcardProps> = ({ flash }) => {

    const [side, setSide] = useState(false);

    function switchSides () => {
        if (side == true) { setSide(false) } 
        else { setSide(true)};
    } 

    return (
        <div className="flash-card">
            <h4>{flash.question}</h4>

        </div>
    );
};

export default Flashcard;