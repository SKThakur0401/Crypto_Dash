import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function Welcome()
{
    return (
       <AppContext.Consumer> 
        {
         ({firstVisit}) =>
             firstVisit?<div>Welcome</div>:null
        }
      </AppContext.Consumer>
    );
};