import axios from "axios";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from "../components/common/NavBar";
import SiteLogo from "../components/common/SiteLogo";
import ModifyRead from "../components/Community/Modify/ModifyRead";


const Modify = () => {
    const location = useLocation();
    const bno = location?.state?.bno;

    const [postData, setPostData] = useState({
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
                const { btitle, bcontent, bnickname, modDate, link } = response.data;
                setPostData({ btitle, bcontent, bnickname, modDate, link });
            } catch (error) {
                console.error('게시글 데이터를 불러오는 도중 에러 발생:', error);
            }
        };

        fetchData();
    }, [bno]);

    return(
        <div>
            <SiteLogo/>
            <NavBar/>
            <ModifyRead
                bno ={bno}
                btitle={postData.btitle}
                bcontent={postData.bcontent} 
                bnickname={postData.bnickname} 
                modDate={postData.modDate} 
                link={postData.link} 
            />
        </div>
    );
}

export default Modify;