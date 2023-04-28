import styled from "styled-components";
import Button from "../../components/Button/Button";

export const HomeWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 32px;
`;

export const ButtonLogout = styled(Button)`
    background-color: ${({ theme }) => theme.colors.green};
    text-transform: uppercase;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.colorDefault};
    margin-top: 20px;
`;
