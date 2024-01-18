import '../../css/Community.css';
import React, { useState } from 'react';
import SelectBox from '../modules/Community/SelectBox';
import { selectOptions } from '../Data/Community/Data';
import { Link } from 'react-router-dom';

interface SearchProps {
    onSearch: (searchValue: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');


    const SelectChange = (selectedValue: string) => {
        setSelectedOption(selectedValue);
    };

    const Search = () => {
        const combinedValue = `${selectedOption}:${inputValue}`;
        onSearch(combinedValue);
    };

    const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return(
        <div className="box">
            <SelectBox options={selectOptions} onSelectChange={SelectChange}/>
            <input className='input' onChange={InputChange}></input>
            <button className='searchButton' onClick={Search}>검색</button>
            <div className='registerBox'>
                <Link to={'/register'} className='touch'>
                    <span className='register'>글 쓰기</span>
                </Link> 
            </div>
        </div>
    );
}

export default Search;