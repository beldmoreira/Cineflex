import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpperSection from "./UpperSection";
import Selection from "./Selection";
import axios from "axios";
import styled from "styled-components";


export default function Movies(){
    const [Movie, setMovies] = useState("");
    const {} = useParams();
    return(
      <>
      <UpperSection>
        <Selection>Selecione o filme</Selection>
      </UpperSection>
    useEffect(() => {
      const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
      promise.then((resposta) => {
        setMovies(resposta.data.posterURL);
      });
    }, []);
    </>
    );
}
    

