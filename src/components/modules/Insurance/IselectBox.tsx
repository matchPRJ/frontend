import React, { useState, useEffect } from 'react';
import '../../../css/Insurance.css';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    onInputChange: (value: string) => void;
  }

const IselectBox: React.FC<SelectProps> = ({ options, onInputChange }) => {

    const Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onInputChange(event.target.value);
    };
  
    return (
        <div>
            <select className='InsuranceBox' onChange={Change}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
            </select>
        </div>
    );
};
  
  export default IselectBox;