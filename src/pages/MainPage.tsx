import SiteLogo from "../components/common/SiteLogo";
import LoginBar from "../components/common/LoginBar";
import NavBar from "../components/common/NavBar";
import '../css/MainPage.css';

const MainPage = () => {
    return(
        <div>
            <div className="main">
                <SiteLogo/>
                <LoginBar/>
            </div>
            <div className="barArea">
                <NavBar/>
            </div>
        </div>
        
    );
}

export default MainPage;