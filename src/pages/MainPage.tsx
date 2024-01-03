import SiteLogo from "../components/common/SiteLogo";
import LoginBar from "../components/common/LoginBar";
import NavBar from "../components/common/NavBar";
import MainView from "../components/Main/MainView";
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
            <MainView/>
        </div>
        
    );
}

export default MainPage;