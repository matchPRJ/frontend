import React, { useState } from 'react';
import '../../../css/CarMenu.css';

interface Option {
  value: string;
  label: string;
}

interface AccordionItemProps {
    title: string;
    options: Option[];
}

interface TextAccordionProps {
  title: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`block ${isOpen ? 'open' : ''}`}>
        <p className='selectText' onClick={toggleAccordion}>{title}</p>
        {isOpen && (
          <ul>
            {options.map((option) => (
              <li key={option.value}>
                <label>
                  <input
                    type="radio"
                    name={title}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => setSelectedOption(option.value)}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export const TextAccordion: React.FC<TextAccordionProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`block ${isOpen ? 'open' : ''}`}>
      <p className='selectText' onClick={toggleAccordion}>{title}</p>
      {isOpen && (
        <input
          className='inputText'
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder={`${title}`}
        />
      )}
    </div>
  );
};
  
 