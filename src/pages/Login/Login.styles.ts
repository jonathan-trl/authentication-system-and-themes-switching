import styled from "styled-components";
import Button from "../../components/Button/Button";
import Col from "../../components/Col";

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Input = styled.input`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: none;
    border-bottom: 1px solid
        ${({ theme }) => theme.colors.borderButtonSwitchTheme};
    height: 48px;
    width: 300px;
    padding-left: 20px;
    outline: none;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 12px;
    margin-bottom: 5px;
`;

export const Form = styled.form``;

export const FormGroup = styled(Col)`
    &:focus-within ${Label} {
        margin-left: 10px;
    }
`;

export const ButtonLogin = styled(Button)`
    background-color: ${({ theme }) => theme.colors.green};
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
`;

export const MessageError = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.colorError};
    margin-bottom: 25px;
    display: inline-block;
`;
