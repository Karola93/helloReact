import React from 'react';
import  './App.css'


export const NamesList= props => {
    return(
        <div>
            <h1>
                {props.list
                    .map(x => x.name)
                    .join(', ')}
            </h1>
        </div>
    )
}