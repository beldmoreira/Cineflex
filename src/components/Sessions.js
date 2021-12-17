import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Selection from "./Selection";
import axios from "axios";
import UpperSection from "./UpperSection";
import styled from "styled-components";


 export default function Sessions(){
     const [Session, setSessions] = useState("");
     const {} = useParams();
     return(
        <>
        <UpperSection>
//          <Selection> Selecione o horário </Selection>
        </UpperSection>
        <Movies>   
    useEffect(() => {
      const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies/ID_DO_FILME/showtimes")
       promise.then((resposta) => {
        setMovies(resposta.data)});
      }, []);
    );
        </Movies>
        <AppFooter>
            <p>ssaa</p>
        </AppFooter>
        </>
}
 
const Movies = styled.div`
display:flex;
flex-wrap: nowrap;
border: 3px #FFFFFF;
box-shadow: 0px 2px 4px 2px #0000001A;

    `;
