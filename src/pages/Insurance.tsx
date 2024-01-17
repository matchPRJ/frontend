import NavBar from "../components/common/NavBar";
import { Container } from "@mui/material";
import Header from "../components/common/Header";
import SelectView from "../components/Insurance/SelectView";

const Insurance = () => {
    return(
        <div>
            <Container maxWidth="lg">
                <Header/>
            </Container>
            <NavBar />
            <SelectView/>
        </div>
    );
}

export default Insurance;