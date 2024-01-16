import NavBar from "../components/common/NavBar";
import SiteLogo from "../components/common/SiteLogo";
import { useLocation } from 'react-router-dom';
import ModifyReply from "../components/Community/Modify/ModifyReply";


const ReplyModify = () => {
    const location = useLocation();
    const { state } = location;
    const { reply } = state;

    return(
        <div>
            <SiteLogo/>
            <NavBar/>
            <ModifyReply 
                rno={reply.rno}
                rbno={reply.rbno}
                rnickname={reply.rnickname}
                rcontent={reply.rcontent}
                regDate={reply.regDate}
            />
        </div>
    );
}

export default ReplyModify;