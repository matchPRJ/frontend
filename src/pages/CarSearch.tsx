import { Container } from "@mui/material";
import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";
import CarMenu from "../components/CarSearch/CarMenu";

const CarSearch = () => {
    return(
        <div>
            <Container maxWidth="lg">
                <Header/>
            </Container>
            <NavBar/>
            <CarMenu/>      
        </div>
    );
}

export default CarSearch;