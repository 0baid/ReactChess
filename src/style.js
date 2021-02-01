import styled, {createGlobalStyle} from 'styled-components';
import {Link} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    *{


        margin:0;
        padding:0;
    }

`;
export const Section = styled.section`

`;
export const Container = styled.div`
    margin:auto;
    margin-top:0;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const BTNContainer = styled.div`
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`;
export const Button = styled.button`
    margin-top:10px;
    margin-right:5px;
    border-radius:4px;
    background:${({primary}) => (primary ? '#4bf9f7' : '#966F33')};
    white-space:nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color:#fff;
    font-size:${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor:pointer;

    &:hover{
        transition:0.3s ease-out;
        background:#fff;
        background:${({primary}) => (primary ? '#0467fb' : '#4bf9f7')};

    }

    @media screen and (max-width:960px){
        width:100%
    }
`;
