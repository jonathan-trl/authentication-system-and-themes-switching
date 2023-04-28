import styled from "styled-components";
import { StyleProps } from "../types";

const Col = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(prop) =>
        prop.alignItems ? prop.alignItems : "flex-start"};
    justify-content: ${(prop) =>
        prop.justifyContent ? prop.justifyContent : "flex-start"};
    margin: ${(prop) => (prop.margin ? prop.margin : 0)};
`;

export default Col;
