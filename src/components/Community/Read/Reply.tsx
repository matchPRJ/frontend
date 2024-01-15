import React, { useEffect, useState } from 'react';
import '../../../css/Community.css';
import axios from 'axios';

interface replyProps {
    rbno:any;
    uno: number;
}

const Reply: React.FC<replyProps> = ({rbno, uno}) => {

    const [rcontent, setReply] = useState("");

    const [replies, setReplies] = useState<{ 
        rno: number; 
        runo: number;
        rnickname: string; 
        regDate: string; 
        rcontent: string 
    }[]>([]);

    const Remove = async (rno: number) => {
        try {
            const response = await axios.post('http://localhost:6400/reply/remove', {
                 rno:rno
            });

            // 삭제 성공 시에 추가적인 로직을 수행하거나 페이지를 리로드할 수 있습니다.
            console.log('댓글이 성공적으로 삭제되었습니다.');
            window.location.reload();
        } catch (error) {
            console.error('댓글 삭제 중 에러 발생:', error);
        }
    };


    useEffect(() => {
        const fetchReplies = async () => {
            try {
                const response = await axios.get(`http://localhost:6400/reply/board/${rbno}`);
                setReplies(response.data as { rno: number; runo: number, rnickname: string; regDate: string; rcontent: string }[]);
            } catch (error) {
                console.error('댓글 데이터를 불러오는 도중 에러 발생:', error);
            }
        };

        fetchReplies(); 
    }, [rbno]);

    const Register = async () => {
        try {
            // rcontent의 내용을 서버에 전송
            const response = await axios.post('http://localhost:6400/reply/register', {
                runo: uno,
                rbno: rbno,
                rcontent: rcontent
            });

            console.log('댓글이 성공적으로 등록되었습니다.');
            window.location.reload();
        } catch (error) {
            console.error('댓글 등록 중 에러 발생:', error);
        }
    };

    return(
        <div className='replyPage'>
            <div className='replyRegister'>
                <textarea 
                    className='replyText'
                    value={rcontent}
                    onChange={(e) => setReply(e.target.value)}
                />
                <button className='replySubmit' onClick={Register}>작성</button>
            </div>
            <div className='replyComment'>
                {replies.map((reply) => (
                    <div key={reply.rno} className='replies'>
                        <div className='replyHeader'>
                            <text>[{reply.rnickname}] | [{reply.regDate}]</text>
                            {reply.runo === uno && (
                                <div>
                                    <text className='replyFont1'>수정</text>
                                    <text>|</text>
                                    <text className='replyFont2' onClick={() => Remove(reply.rno)}>삭제</text>
                                </div>
                            )}
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