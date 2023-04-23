import styled from "styled-components";
import parede from '../../ativos/parede.jpg'


export const Background = styled.div`
background-image: url(${parede});
background-position: bottom;
width: 100%;
height: 100%;
margin-bottom: 0%;
margin-top: 0%;
`

export const BoxCardImobiliario = styled.div`
display: flex;
width: 75%;
height: 60%;
margin-left: auto;
margin-right: auto;
margin-top: 10%;
margin-bottom: 10%;

`
export const TextoCardImobiliario = styled.text`
display: flex;
text-align: justify;
font-family: 'roboto';
font-size: medium;

`
export const ButtonsModals = styled.div`
margin: 8px;
text-align: center;

`
export const BoxCardTributario = styled.div`
display: flex;
width: 75%;
height: 60%;
margin-left: auto;
margin-right: auto;
margin-top: 10%;
margin-bottom: 10%;
`

export const BoxCardCivil = styled.div`
display: flex;
width: 75%;
height: 60%;
margin-left: auto;
margin-right: auto;
margin-top: 10%;
margin-bottom: 10%;

`

export const BoxButtonAtuacao = styled.div`
display: flex;
/* text-align: justify; */
width: 75%;
height: 60%;
margin-left: auto;
margin-right: auto;
justify-content: center;
text-align: start;
margin-top: 0%;
margin-bottom: 0%;
`

export const ButtonAtuacao = styled.div`
margin-bottom: 20%;
`