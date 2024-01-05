import React, { useState, useEffect } from 'react';
import '../../../css/CarMenu.css';

interface Option {
  value: string;
  label: string;
}

interface AccordionItemProps {
    title: string;
    options: Option[];
    onInputChange: (value: string) => void;
}

interface TextAccordionProps {
  title: string;
  onInputChange: (value: string) => void;
}

interface SelectAccordionProps {
  title: string;
  options: Option[];
  onInputChange: (value: string) => void;
}

export const RadioAccordion: React.FC<AccordionItemProps> = ({ title, options, onInputChange  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`block ${isOpen ? 'open' : ''}`}>
        <p className='menuText' onClick={toggleAccordion}>{title}</p>
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
                    onChange={() => {
                      setSelectedOption(option.value);
                      onInputChange(option.value);
                    }}
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

export const TextAccordion: React.FC<TextAccordionProps> = ({ title, onInputChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`block ${isOpen ? 'open' : ''}`}>
      <p className='menuText' onClick={toggleAccordion}>{title}</p>
      {isOpen && (
        <input
          className='inputText'
          type="text"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            onInputChange(e.target.value); 
          }}
          placeholder={`${title}`}
        />
      )}
    </div>
  );
};

export const SelectAccordion: React.FC<SelectAccordionProps> = ({ title, options, onInputChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptionStart, setSelectedOptionStart] = useState<string>('');
  const [selectedOptionEnd, setSelectedOptionEnd] = useState<string>('');
  const [filteredOptionsEnd, setFilteredOptionsEnd] = useState<Option[]>(options);

  useEffect(() => {
    setFilteredOptionsEnd(
      options.filter((option) => option.value >= selectedOptionStart || option.value === '')
    );
  }, [selectedOptionStart, options]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`block ${isOpen ? 'open' : ''}`}>
      <p className='menuText' onClick={toggleAccordion}>{title}</p>
      {isOpen && (
        <>
          <select
            className='selectBox'
            value={selectedOptionStart}
            onChange={(e) => {
              setSelectedOptionStart(e.target.value);
              setSelectedOptionEnd('');
              onInputChange(`${e.target.value},`); // 선택한 값과 구분자를 조합하여 전달
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className='selectBox'> ~ </span>
          <select
            className='selectBox'
            value={selectedOptionEnd}
            onChange={(e) => {
              setSelectedOptionEnd(e.target.value);
              onInputChange(`${selectedOptionStart},${e.target.value}`); // 시작 값과 구분자, 선택한 값 조합하여 전달
            }}
          >
            {filteredOptionsEnd.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
  
 