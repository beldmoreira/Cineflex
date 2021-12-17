import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ConfirmationButton from "./ConfirmationButton";
import axios from "axios";
import {Link} from 'react-router-dom';
import styled from "styled-components";

export default function Success(){
    const [Pagina,setPagina ] = useState("");
    const {} = useParams();
    return(
        <>
        <UpperSection> 
            <Font>Pedido feito com sucesso! </Font>
        </UpperSection>
            <Typography>Filme e sessão </Typography>
            <Typography>Ingressos</Typography>
            <Typography>Comprador</Typography>
            <ConfirmationButton> Voltar pra Home </ConfirmationButton>
         </>
    );
}

const UpperSection = styled.div `
height: 110px;
width: 374px; `;

const Font = styled.p `
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0.04em;
text-align: center;
color: #247A6B;
`

const Typography= styled.p `
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0.04em;
text-align: left;
color: #293845;`;



