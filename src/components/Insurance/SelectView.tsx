import '../../css/Insurance.css';
import React, { useState } from 'react';
import { Age, Car, Km } from '../Data/Insurance/InsuranceData';
import IselectBox  from '../modules/Insurance/IselectBox'
import { calculateLogic } from '../modules/Insurance/CalculateLogic';

const SelectView = () => {
    const [selectedAge, setSelectedAge] = useState<string>('');
    const [selectedCar, setSelectedCar] = useState<string>('');
    const [selectedKm, setSelectedKm] = useState<string>('');
    const [recommend1, setRecommend1] = useState<string>('보험사1');
    const [recommend2, setRecommend2] = useState<string>('보험사2');
    const [recommend3, setRecommend3] = useState<string>('보험사3');


    const AgeSelect = (selectedValue: string) => {
        setSelectedAge(selectedValue);
    };

    const CarSelect = (selectedValue: string) => {
        setSelectedCar(selectedValue);
    };

    const KmSelect = (selectedValue: string) => {
        setSelectedKm(selectedValue);
    };

    const Calculate = () => {
        const recommendations = calculateLogic(selectedAge, selectedCar, selectedKm);
        
        // 추천된 보험사를 각각의 상태에 할당
        setRecommend1(recommendations[0] || '보험사1');
        setRecommend2(recommendations[1] || '보험사2');
        setRecommend3(recommendations[2] || '보험사3');
    };

    return(
        <div className="InsuranceMain">
            <h1>다이렉트 보험 추천</h1>
            <span>옵션에 따른 보험사를 추천합니다.</span>
            <div className='checkbox'>
                <div className='Itable'>
                    <h2>연령</h2>
                    <span>나이를 선택하세요</span>
                    <IselectBox options={Age} onInputChange={(selectedValue) => AgeSelect(selectedValue)}/>
                    <text className='tt'>보험사: {recommend1}</text>
                </div>
                <div className='Itable'>
                    <h2>차종</h2>
                    <span>차종을 선택하세요</span>
                    <IselectBox options={Car} onInputChange={(selectedValue) => CarSelect(selectedValue)}/>
                    <text className='tt'>보험사: {recommend2}</text>
                </div>
                <div className='Itable'>
                    <h2>주행거리</h2>
                    <span>주행거리를 선택하세요</span>
                    <IselectBox options={Km} onInputChange={(selectedValue) => KmSelect(selectedValue)}/>
                    <text className='tt'>보험사: {recommend3}</text>
                </div>
            </div>
            <button className='Ibutton' onClick={Calculate}>확인하기</button>
        </div>
    );
}

export default SelectView;