import styled from "styled-components";

export default function Header (){
    return(
        <>
        <AppHeader>
            <Title>CINEFLEX</Title>  
        </AppHeader>
        </>
        
    );
}

const Title = styled.p`
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    color:#E8833A;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    top: 0;
    left: 0;
    `;

const AppHeader= styled.header`
    height: 67px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: #C3CFD9;
    position: fixed;
    z-index= 1
`;
