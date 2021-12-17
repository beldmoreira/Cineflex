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
    color:#E8833A;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    justify-content: center;
    align-content: center; 
`;

const AppHeader= styled.header`
    height: 67px;
    width: 375px; 
    background-color: #C3CFD9;
`;
