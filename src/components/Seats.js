import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpperSection from "./UpperSection";
import ConfirmationButton from "./ConfirmationButton";
import axios from "axios";
import {Link} from 'react-router-dom';
import styled from "styled-components";

// "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many"

export default function Seats(){
    const [Seats, setSeats] = useState("");
    const [Name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const {} = useParams();
    return(
        <>
        <UpperSection>
            <Span> Selecione o(s) assento(s) </Span>  
        </UpperSection>

        <ImportantInfo> Nome do comprador:</ImportantInfo>
        <Input placeholder="Digite seu CPF..." value={Name} onChange={e => setName(e.target.value)}/>
        <ImportantInfo> CPF do comprador: </ImportantInfo>
        <Input placeholder="Digite seu nome..." value={CPF} onChange={e => setCPF(e.target.value)} />
        <ConfirmationButton>Reservar assento(s)</ConfirmationButton>
        <AppFooter>
            
        </AppFooter>
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
}
 `;

