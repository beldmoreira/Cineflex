import { useState, useEffect } from "react";
import Selection from "./Selection";
import UpperSection from "./UpperSection";
import AppFooter from "./AppFooter";
import axios from "axios";
import SessionHour from "./SessionHour";


 export default function Sessions(){
     const [sessionDate, setSessionsDate] = useState("");
     useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes")
         promise.then((resposta) => {
          setSessionsDate(resposta.data)});
        }, []);
        if (sessionDate == undefined){
            return (
            <p> Carregando </p>   
           ); 
            }
     return(
        <>
        <UpperSection>
         <Selection> Selecione o horário </Selection>
        </UpperSection>
        {sessionDate.map(session => 
            <div>
                <SessionHour {...session}/>
            </div>)}
         <AppFooter/>
        </>
        );
}
