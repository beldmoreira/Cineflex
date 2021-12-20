import styled from "styled-components";
import axios from "axios";
import UpperSection from "./UpperSection";
import Selection from "./Selection";
import { useState, useEffect } from "react";
import MoviePosters from "./MoviePosters";


export default function Movies(props){
  const [movieImages, setMoviesImages] = useState([]);
      useEffect(() => {
      const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
      promise.then((response) => {
        setMoviesImages(response.data);
      });
    }, []);
   if (movieImages == null){
        return (
        <p> Carregando </p>   
       );
     }

    return(
        <>
        <UpperSection>
        <Selection> Selecione o filme</Selection>
        </UpperSection>
        <MoviePics>
        {movieImages.map(poster => 
            <div>
                <MoviePosters {...poster}/>
            </div>)}
        </MoviePics>
        </>
    );
}

const MoviePics = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 30px;
margin-right:30px;
div{
  width: 145px;
  height: 209px;
  margin: 5px;
  border: solid 8px #FFFFFF;
  border-radius: 3px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}
`;