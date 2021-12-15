import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Success(){
    return(
        <>
        <div className="upper-section"> 
            <p className="font">Pedido feito com sucesso! </p>
        </div>
            <p className="typography">Filme e sessão </p>
            <p className="typography">Ingressos</p>
            <p className="typography">Comprador</p>
            <button className="confirmation-button"> Voltar pra Home </button>
         </>
    );
}