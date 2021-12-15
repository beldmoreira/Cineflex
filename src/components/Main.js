import { useState, useEffect } from "react";
import axios from "axios";
export default function Movies(){
    const [Movie, setMovies] = useState("");

    useEffect(() => {
      const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
      promise.then((resposta) => {
        setMovies(resposta.data.posterURL);
      });
    }, []);
}
export default function Main (){
    return(
        <span className="typography">Selecione o filme</span>
    );
}