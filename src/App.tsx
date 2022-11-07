import React from 'react';
import './App.css';

import {Costs} from "./components/Costs/Costs";

function App() {

    const costs = [
        {
            date: new Date(2022, 2, 12),
            descrioption: 'холодельник',
            amount: 1000
        },
        {
            date: new Date(2022, 3, 11),
            descrioption: 'Ноут',
            amount: 1200
        },
        {
            date: new Date(2020, 8, 9),
            descrioption: 'Джинсы',
            amount: 199
        },
    ];

    return (
        <div className="App">
            <h1>Тест</h1>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
