import styled from "@emotion/styled";
import {colors} from '../../Styles/colorTheme'

export const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const Contenedor = styled.div`
    border-radius: 10px;
    padding: 10px;
    border: 1px solid ${colors.gold};
    background-color: #e1e1e1;
    margin: 0 0 100px 0;
    width: 700px;
    
    display: inline;
`;
