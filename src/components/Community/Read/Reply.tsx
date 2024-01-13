import React, { useEffect, useState } from 'react';
import '../../../css/Community.css';
import axios from 'axios';

interface replyProps {
    rbno:any;
}

const Reply: React.FC<replyProps> = ({rbno}) => {

    const [replies, setReplies] = useState<{ 
        rno: number; 
        rnickname: string; 
        regDate: string; 
        rcontent: string 
    }[]>([]);


    useEffect(() => {
        const fetchReplies = async () => {
            try {
                const response = await axios.get(`http://localhost:6400/reply/board/${rbno}`);
                setReplies(response.data as { rno: number; rnickname: string; regDate: string; rcontent: string }[]);
            } catch (error) {
                console.error('댓글 데이터를 불러오는 도중 에러 발생:', error);
            }
        };

        fetchReplies(); 
    }, [rbno]);


    return(
        <div className='replyPage'>
            <div className='replyRegister'>
                <textarea className='replyText'></textarea>
                <button className='replySubmit'>작성</button>
            </div>
            <div className='replyComment'>
                {replies.map((reply) => (
                    <div key={reply.rno} className='replies'>
                        <div className='replyHeader'>
                            <text>[{reply.rnickname}] | [{reply.regDate}]</text>
                            <div>
                                <text className='replyFont1'>수정</text>
                                <text>|</text>
                                <text className='replyFont2'>삭제</text>
                            </div>
                        </div>
                        <div className='replyContent'>
                            <text>{reply.rcontent}</text>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reply;