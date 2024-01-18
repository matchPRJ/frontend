import '../../../css/Community.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface ModifyReadProps {
    bno: any;
    btitle: string;
    bcontent: string;
    bnickname: string;
    modDate: string;
    link?: string;
}

const ModifyRead: React.FC<ModifyReadProps> = ({ bno, btitle, bcontent, bnickname, modDate, link }) => {
    const [modifiedContent, setModifiedContent] = useState<string>(bcontent);
    const [modifiedTitle, setModifiedTitle] = useState<string>(btitle);
    const navigate = useNavigate();

    const Modify= async () => {
        try {
            // 수정된 내용을 서버로 전송하고 처리하는 로직 추가
            await axios.post('http://localhost:6400/board/modify', {
                bno: bno,
                btitle: modifiedTitle,
                bcontent: modifiedContent,
            });

            // 수정 완료 후 이동하거나 다른 작업 수행
            navigate(`/read/${bno}`);
        } catch (error) {
            console.error('게시물 수정 중 에러 발생:', error);
        }
    };

    return(
        <div className='readPage'>
            <input 
                className='modifyTitle'
                placeholder={btitle} 
                value={modifiedTitle}
                onChange={(e) => setModifiedTitle(e.target.value)}
            />
            <div className='readName'>
                <text>작성자: [{bnickname}]</text>
                <text>[{modDate}]</text>
            </div>
            <div className='readArea'>
                {link && (link.includes('.mp4') ? (
                    <video width="320" height="240" controls>
                        <source src={link} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    ) : link ? (
                    <img src={link} alt="게시물 이미지" />
                ) : null)}
                <textarea
                    className='modifyContent'
                    placeholder={bcontent} 
                    value={modifiedContent}
                    onChange={(e) => setModifiedContent(e.target.value)}
                />
            </div>
            <span className='registerButton' onClick={Modify}>수정</span>
        </div>
    );
}

export default ModifyRead;