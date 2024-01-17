import NavBar from "../components/common/NavBar";
import { Container } from "@mui/material";
import Header from "../components/common/Header";
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

    // 테스트용 회원번호
    const uno:number = 1;

    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async (searchValue: string) => {
        try {
            const url = searchValue
                ? `http://localhost:6400/board/list?page=${currentPage}&btype=${searchValue}`
                : `http://localhost:6400/board/list?page=${currentPage}`;

            const response = await axios.get(url);
            setBoardData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('게시판 데이터를 불러오는 도중 에러 발생:', error);
        }
    };

    useEffect(() => {
        fetchData('');
    }, [currentPage]);

    const PageClick = (pageNum: number) => {
        setCurrentPage(pageNum);
    };
    

    return (
        <div>
            <Container maxWidth="lg">
                <Header/>
            </Container>
            <NavBar />
            <Search onSearch={fetchData} uno={uno}/>
            <Board boardData={boardData} currentPage={currentPage} onPageClick={PageClick} uno={uno} />
        </div>
    );
}

export default Community;