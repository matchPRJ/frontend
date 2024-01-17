import { Container } from "@mui/material";
import NavBar from "../components/common/NavBar";
import MainView from "../components/Main/MainView";
import Header from "../components/common/Header";

const MainPage = () => {
    return(
        <div>
            <Container maxWidth="lg">
                <Header/>
            </Container>
            <NavBar/>
            <MainView/>
        </div>
        
    );
}

export default MainPage;