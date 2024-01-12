import '../../css/Community.css';
import React from 'react';

interface BoardProps {
    boardData: {
        dtoList: {
            bno: number;
            btitle: string;
            bnickname: string;
            regDate: string;
        }[];
        totalPage: number;
        page: number;
        prev: boolean;
        next: boolean;
        pageList: number[];
    };
}

const Board: React.FC<BoardProps> = ({boardData}) => {
    return(
        <div className='boardMain'>
            <div className='boardHeader'>
                <p>글 번호</p>
                <p>제목</p>
                <p>작성자</p>
                <p>작성날짜</p>
            </div>
            <div className='boardTable'>
            {boardData.dtoList.map((item) => (
                    <div key={item.bno} className='boardRow'>
                        <p>{item.bno}</p>
                        <p>{item.btitle}</p>
                        <p>{item.bnickname}</p>
                        <p>{item.regDate}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {boardData.pageList.map((pageNum) => (
                    <button key={pageNum}>{pageNum}</button>
                ))}
            </div>
        </div>
    );
}

export default Board;