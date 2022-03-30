
import styled from "styled-components";

const Button=styled.button`

border-style:${(props)=>props.border || "solid"} ;
background:${(props)=>props.primary?"darkorange":"transparent"};
color:${(props)=>props.color || "black"};
padding: 10px;
margin-top: 10px;
width: 150px;
font-size:18px;

&:hover{
   cursor:pointer; 
   border: 2px solid black;
}
`


export{Button}