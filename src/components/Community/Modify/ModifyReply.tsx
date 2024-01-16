import '../../../css/Community.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ModifyReplyProps {
    rno: number;
    rbno: number;
    rnickname: string;
    rcontent: string;
    regDate: string;
}

const ModifyReply: React.FC<ModifyReplyProps> = ({ rno, rbno, rnickname, rcontent, regDate }) => {
    const navigate = useNavigate();
    const [modifiedContent, setModifiedContent] = useState(rcontent);

    const ContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setModifiedContent(e.target.value);
    };

    const Modify = async () => {
        try {
            // 서버로 수정된 내용 전송
            await axios.post('http://localhost:6400/reply/modify', {
                rno: rno,
                rcontent: modifiedContent
            });

            navigate(`/read/${rbno}`);
        } catch (error) {
            console.error('댓글 수정 중 에러 발생:', error);
        }
    };

    return(
        <div className='replyModify'>
            <div className='replies'>
                <div className='replyHeader'>
                    <text>[{rnickname}] | [{regDate}]</text>
                </div>
                <div className='replyContent'>
                    <textarea
                        value={modifiedContent}
                        onChange={ContentChange}
                        className='modifyTextArea'
                    />
                </div>
            </div>
            <button onClick={Modify} className='modifyButton'>
                        수정
            </button>
        </div>
    );
}

export default ModifyReply;