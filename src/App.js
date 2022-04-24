import React from 'react';
import './App.css';
import {NamesList} from "./NamesList";
import {Counter} from "./RecordsCount";

const age= new Date().getFullYear() - Number(prompt('Type year of your birth'));

export const App = () => {
   return ( <div>
        <h1> Your age is {age} </h1>
        <hr/>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi exercitationem fugiat fugit ipsum natus
            necessitatibus neque omnis repellat veniam! Adipisci, culpa est labore laudantium nisi nobis pariatur
            perspiciatis quia?
            <p>
                <input id="v" type="text"/>
            </p>
        </h2>
    </div>
);
};


export const List = props => {
    return(
        <div>
            <NamesList list={props.list} />
            <Counter count={props.list.length}/>
        </div>
    )
}

