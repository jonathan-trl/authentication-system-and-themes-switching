import styled from "styled-components";

const Button = styled.button`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.colorDefault};
    padding: 15px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export default Button