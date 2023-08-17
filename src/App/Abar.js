import React from "react";
import styled,{css} from 'styled-components';
import {AppContext} from './AppProvider';

const Logo=styled.div`

    font-size:1.5em;

`
const Bar=styled.div`

   display:grid;
   grid-template-columns:180px auto 100px 100px;
   margin-bottom:40px;

`

const ControlButtonElem=styled.div`
    
   cursor:pointer;
   ${props=>props.active && css` // props take active currently.
        
        text-shadow: 2px 2px #299617;
   `}

`

function ControlButton({name,active})  // here {name} and {active} is destructuring of props, down {name} is used for displaying.
{

   return (

      <AppContext.Consumer>

         {({page,setPage}) =>(

           <ControlButtonElem active={page===name} onClick={()=> setPage(name)}> {name} </ControlButtonElem>
           
        )}

      </AppContext.Consumer>     
   )

}

export default function()
{
    return (
    <Bar> 
        <Logo> CryptoDash </Logo>
        <div>            </div>
        <ControlButton name ="DashBoard" active="temp"/> 
        <ControlButton name ="Settings" />       
    </Bar>
    );
}