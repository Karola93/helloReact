import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';
import {App, List} from "./App.js";
import {person1, person2} from "./data/persons";


render(
    <React.StrictMode className="StrictMode">
    <>
        <App/>
        <App/>
        <App/>
        <List list={[person1, person2]} />
    </>
    </React.StrictMode>,
    document.getElementById('root'),
);


