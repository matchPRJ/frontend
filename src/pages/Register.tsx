import Write from "../components/Community/Register/Write";
import NavBar from "../components/common/NavBar";
import SiteLogo from "../components/common/SiteLogo";
import { useLocation } from 'react-router-dom';


const Register = () => {
    const location = useLocation();
    const uno = location?.state?.uno;
    return(
        <div>
            <SiteLogo />
            <NavBar />
            <Write uno={uno}/>
        </div>
    );
}

export default Register;