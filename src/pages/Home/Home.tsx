import { useContext } from "react";
import ButtonSwitchTheme from "../../components/ButtonSwitchTheme/ButtonSwitchTheme";
import { AuthContext } from "../../context/AuthContext";
import { ButtonLogout, HomeWrapper, Title } from "./Home.styles";

const Home = () => {
    const { logout } = useContext(AuthContext);

    return (
        <>
            <ButtonSwitchTheme />
            <HomeWrapper>
                <Title>Seja bem vindo!</Title>
                <ButtonLogout onClick={logout}>Sair</ButtonLogout>
            </HomeWrapper>
        </>
    );
};

export default Home;
