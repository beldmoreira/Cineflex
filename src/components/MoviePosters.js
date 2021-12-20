import { Link } from "react-router-dom";
import styled from "styled-components";


export default function MoviePosters({ id, posterURL, title }) {
    return(
        <Link to={`/sessoes/${id}`}>
            <MoviePicture src={posterURL} alt={title}/>
        </Link>
    );
} 
const MoviePicture= styled.img`
width: 129px;
height: 193px;
`;
