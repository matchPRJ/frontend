import { Container } from "@mui/material";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import MainView from "../components/Main/MainView";

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