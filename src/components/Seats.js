import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Seats(){
    const [Seats, setSeats] = useState("");
    return(
        <>
        <div className="upper-section">
            <span> Selecione o(s) assento(s) </span>  
        </div>
            <button className="confirmation-button">Reservar assento(s)</button>
        <footer>
            <p>ssaa</p>
        </footer>
        </>
    );
}
