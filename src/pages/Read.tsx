// 해당 게시글 상세 보기
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/common/NavBar";
import SiteLogo from "../components/common/SiteLogo";
import ReadPage from '../components/Community/Read/ReadPage';
import Reply from '../components/Community/Read/Reply';
import { useLocation } from 'react-router-dom';

const Read = () => {
    const location = useLocation();
    const uno = location?.state?.uno;
    const { bno } = useParams();
    const [postData, setPostData] = useState({
        buno: 0,
        btitle: '',
        bcontent: '',
        bnickname: '',
        modDate: '',
        link: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:6400/board/read?bno=${bno}`);
                const { buno, btitle, bcontent, bnickname, modDate, link } = response.data;
                setPostData({ buno, btitle, bcontent, bnickname, modDate, link });
            } catch (error) {
                console.error('게시글 데이터를 불러오는 도중 에러 발생:', error);
            }
        };

        fetchData();
    }, [bno]);


    return(
        <div>
            <SiteLogo />
            <NavBar />
            <ReadPage 
                bno ={bno}
                buno={postData.buno} 
                btitle={postData.btitle}
                bcontent={postData.bcontent} 
                bnickname={postData.bnickname} 
                modDate={postData.modDate} 
                link={postData.link} 
                uno={uno} 
            />
            <Reply rbno={bno} uno={uno}/>
        </div>
    );
}

export default Read;