import { useState, useEffect } from "react";
import UpperSection from "./UpperSection";
import ConfirmationButton from "./ConfirmationButton";
import axios from "axios";
import styled from "styled-components";
import AppFooter from "./AppFooter";
import Selection from "./Selection";



export default function Seats(){
    const [Name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const [selectedSeats, setselectedSeats] = useState("");
      useEffect(() => {
      const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many")
      promise.then((response) => {
        setselectedSeats(response.data);
      });
    }, []);
         
    return(
        <>
        <UpperSection>
            <Selection> Selecione o(s) assento(s) </Selection>  
        </UpperSection>
        
        <ImportantInfo> Nome do comprador:</ImportantInfo>
        <Input placeholder="Digite seu CPF..." value={Name} onChange={e => setName(e.target.value)}/>
        <ImportantInfo> CPF do comprador: </ImportantInfo>
        <Input placeholder="Digite seu nome..." value={CPF} onChange={e => setCPF(e.target.value)} />
        <ConfirmationButton>Reservar assento(s)</ConfirmationButton>
        <AppFooter/> 
        </>
    );
}

const ImportantInfo = styled.p`
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color:#247A6B;
`;

const Input = styled.input `
::placeholder {
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #AFAFAF;
  }`;   
