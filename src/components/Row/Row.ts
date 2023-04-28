import styled from "styled-components";
import { StyleProps } from "../types";

const Row = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: ${(prop) => (prop.alignItems ? prop.alignItems : "center")};
    justify-content: ${(prop) =>
        prop.justifyContent ? prop.justifyContent : "flex-start"};
    margin: ${(prop) => (prop.margin ? prop.margin : 0)};
`;

export default Row;
