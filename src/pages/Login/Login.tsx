import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonSwitchTheme from "../../components/ButtonSwitchTheme/ButtonSwitchTheme";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { AuthContext } from "../../context/AuthContext";
import {
    ButtonLogin,
    Form,
    FormGroup,
    Input,
    Label,
    LoginWrapper,
    MessageError,
    Title,
} from "./Login.styles";
import { FormValues } from "./types";

const Login = () => {
    const { register, handleSubmit } = useForm<FormValues>();
    const { token, authenticate } = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    const onSubmit = async (data: FormValues) => {
        try {
            await authenticate(data.email, data.password);
        } catch (error) {
            setError("Usuário não encontrado!");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <>
            <ButtonSwitchTheme />
            <LoginWrapper>
                <Col>
                    <Row margin={"40px 0"}>
                        <Title>Olá, faça login em sua conta.</Title>
                    </Row>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label>E-mail</Label>
                            <Input
                                type="email"
                                {...register("email")}
                                placeholder="Digite seu email"
                                autoComplete="off"
                            />
                        </FormGroup>
                        <Col margin={"40px 0 25px"}>
                            <FormGroup>
                                <Label>Senha</Label>
                                <Input
                                    type="password"
                                    {...register("password")}
                                    placeholder="Digite sua senha"
                                    autoComplete="off"
                                />
                            </FormGroup>
                        </Col>
                        {error && <MessageError>{error}</MessageError>}
                        <Col>
                            <ButtonLogin type="submit">Entrar</ButtonLogin>
                        </Col>
                    </Form>
                </Col>
            </LoginWrapper>
        </>
    );
};

export default Login;
