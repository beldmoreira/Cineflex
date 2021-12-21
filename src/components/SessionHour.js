import styled from "styled-components";

export default function SessionHour({ weekday, date, showtimes }){
    return(
        <>
        <Date>{`${weekday}-${date}`}</Date>
        <Hours>
            {showtimes.map(hour => <p>{hour.name}</p>)}
        </Hours>
        </>
    );
}

const Date= styled.div`
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: 0.02em;
text-align: left;
`;
const Hours = styled.div`
background-color: #E8833A;
height: 43px;
width: 83px;
left: 24px;
top: 351px;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
p{
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.02em;
text-align: center;
color:#FFFFFF;
}
`;
