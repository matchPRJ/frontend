import NavBar from "../components/common/NavBar";
import SiteLogo from "../components/common/SiteLogo";
import Board from "../components/Community/BoardData";
import Search from "../components/Community/Search";
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Community = () => {
    const [boardData, setBoardData] = useState({
        dtoList: [],
        totalPage: 0,
        page: 0,
        prev: false,
        next: false,
        pageList: [],
    });

    const fetchData = async (searchValue: string) => {
        try {
            const url = searchValue
                ? `http://localhost:6400/board/list?btype=${searchValue}`
                : 'http://localhost:6400/board/list';

            const response = await axios.get(url);
            setBoardData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('게시판 데이터를 불러오는 도중 에러 발생:', error);
        }
    };

    useEffect(() => {
        fetchData('');
    }, []);

    return (
        <div>
            <SiteLogo />
            <NavBar />
            <Search onSearch={fetchData} />
            <Board boardData={boardData} />
        </div>
    );
}

export default Community;