import '../../../css/Community.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ReadPageProps {
    bno: any;
    buno: number;
    btitle: string;
    bcontent: string;
    bnickname: string;
    modDate: string;
    link?: string;
    uno: number;
}

const ReadPage: React.FC<ReadPageProps> = ({ bno, buno, btitle, bcontent, bnickname, modDate, link, uno}) => {
    const canEdit = buno === uno;
    const navigate = useNavigate();

    const Remove = async () => {
        try {
            const response = await axios.post('http://localhost:6400/board/remove', {
                bno: bno
            });

            navigate('/community');
        } catch (error) {
            console.error('게시물 삭제 중 에러 발생:', error);
        }
    };

    return(
        <div className="readPage">
            {canEdit && (
                <div className="readButtons">
                    <Link to={`/modify/${bno}`} state={{bno}} className='aTitle'>
                        <text className='font1'>수정</text>
                    </Link>
                    <text>|</text>
                    <text className='font2' onClick={Remove}>삭제</text>
                </div>
            )}
            <text className='readTitle'>{btitle}</text>
            <div className='readName'>
                <text>작성자: [{bnickname}]</text>
                <text>[{modDate}]</text>
            </div>
            <div className='readArea'>
                {link && link.includes('.mp4') ? (
                    <video width="320" height="240" controls>
                        <source src={link} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={link} alt="게시물 이미지" />
                )}
                <text>{bcontent}</text>
            </div>
        </div>
    );
}

export default ReadPage;