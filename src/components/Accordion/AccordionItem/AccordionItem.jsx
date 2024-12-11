import React, { useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const AccordionItem = ({ isOpen, onClick, question, answer }) => {
  const answerRef = useRef(null); 

  const dynamicStyle = isOpen
    ? {
        height: `${answerRef.current?.scrollHeight}px`,
        transition: 'height 0.5s ease-in-out',
      }
    : {
        height: '0px',
        transition: 'height 0.5s ease-in-out',
      };

  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
      </button>

      <div
        className="answer-container"
        style={dynamicStyle}
      >
        <aside
          ref={answerRef}
          className="answer-content"
          dangerouslySetInnerHTML={{ __html: answer }}
        ></aside>
      </div>
    </div>
  );
};

export default AccordionItem;
