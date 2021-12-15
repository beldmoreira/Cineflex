import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

 export default function Sessions(){
     const [Session, setSessions] = useState("");
     return(
        <>
        <div className="upper-section">
//          <span> Selecione o horário </span>
        </div>
        <div className="">   
    useEffect(() => {
      const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies/ID_DO_FILME/showtimes")
       promise.then((resposta) => {
        setMovies(resposta.data)});
      }, []);
    );
        </div>
        <footer>
            <p>ssaa</p>
        </footer>
        </>
}
 