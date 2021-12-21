import styled from "styled-components";

export default function AppFooter (props){
    return(
    <>
      <Footer>
        <FooterInfo >
          <FooterImage>
            <FooterPic img alt={`${props.title} posterURL`} src={props.posterURL}/>
          </FooterImage>
        </FooterInfo>
        <FooterFont>{props.title} </FooterFont>
      </Footer>
    </>
    );
}
const Footer = styled.div `
height: 117px;
width: 100%;
background-color: #DFE6ED;
border-top: 1px solid #9EADBA;
display: flex;
align-items: center;
position: fixed;
bottom: 0;
left: 0;`;

const FooterInfo = styled.div`
margin-left: 10px;`;

const FooterImage= styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 64px;
height: 89px;
background-color: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
`;
const FooterPic = styled.div`
width: 48px;
height: 72px;
`;
const FooterFont= styled.p`
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
`;