import '../../css/CarMenu.css';
import React, { useState } from 'react';
import axios from 'axios';
import {RadioAccordion, TextAccordion, SelectAccordion} from '../modules/CarSearch/Accordion';
import { typeOptions, oilOptions, brandOptions, tagOptions, yearOptions, kmOptions } from '../Data/CarSearch/OptionsData';

interface Car {
    cno: number;
    tag: string;
    type: string;
    brand: string;
    name: string;
    price: string;
    year: number;
    km: string;
    img: string;
}

const CarMenu = () => {
    const [carList, setCarList] = useState<Car[]>([]);
    const [searchData, setSearchData] = useState({
        nType: '',    // 차 이름
        tType: '',    // 국산/수입
        typeType: '',    // 차종
        brandType: '',    // 브랜드
        oilType: '',    // 연료
        yType: '',    // 연식
        kType: '',   // 주행거리
      });

      const send = async () => {
        try {
            const serverUrl = 'http://192.168.0.4:6400/car/list';
    
            // searchData에서 빈 값을 필터링합니다.
            const filteredSearchData = Object.fromEntries(
                Object.entries(searchData).filter(([_, value]) => value !== '')
            );
    
            const response = await axios.get(serverUrl, {
                params: Object.keys(filteredSearchData).length > 0 ? filteredSearchData : null,
            });
    
            console.log('서버 응답:', response.data);
    
            const CarList = response.data.dtoList;
            setCarList(CarList);
        } catch (error) {
            console.error('GET 요청 중 에러 발생:', error);
        }
    };
    
    const InputChange = (menuType: string, value: string) => {
        // searchData를 업데이트
        setSearchData((prevData) => ({
          ...prevData,
          [menuType]: value,
        }));
    };
    
    return(
        <div className='main'>
            <div className="menu">
                <TextAccordion title="차 이름" onInputChange={(value) => InputChange('nType', value)} />
                <RadioAccordion title="국산/수입" options={tagOptions} onInputChange={(value) => InputChange('tType', value)} />
                <RadioAccordion title="차종" options={typeOptions} onInputChange={(value) => InputChange('typeType', value)} />
                <RadioAccordion title="브랜드" options={brandOptions} onInputChange={(value) => InputChange('brandType', value)} />
                <RadioAccordion title="연료" options={oilOptions} onInputChange={(value) => InputChange('oilType', value)} />
                <SelectAccordion title="연식" options={yearOptions} onInputChange={(value) => InputChange('yType', value)} />
                <SelectAccordion title="주행거리" options={kmOptions} onInputChange={(value) => InputChange('kType', value)} />
                <div>
                    <button className='button' onClick={send}>검색</button>
                </div>
            </div>
            <div className='product'>
                <ul className='car-list'>
                    {carList.map((car, index) => (
                        <li key={index} className='carLi'>
                        <img src={car.img} alt={car.name} className='carImg' />
                        <p>{car.name}</p>
                        <p>{car.price}</p>
                        <p>{car.year}년식, {car.km}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default CarMenu;