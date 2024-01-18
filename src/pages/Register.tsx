import Write from "../components/Community/Register/Write";
import NavBar from "../components/common/NavBar";
import { Container } from "@mui/material";
import Header from "../components/common/Header";

const Register = () => {
    return(
        <div>
            <Container maxWidth="lg">
                <Header/>
            </Container>
            <NavBar />
            <Write/>
        </div>
    );
}

export default Register;