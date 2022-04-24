import React from 'react';
import './App.css';
import {NamesList} from "./NamesList";

export const Counter = props => {
    return(
        <div>
            <h1>Razem: {props.count} rekordów.</h1>
        </div>
    )
}

