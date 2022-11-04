import React from 'react';
import './App.css';
import {CostItem} from "./components/CostItem";

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
            <CostItem
                date={costs[0].date}
                descrioption={costs[0].descrioption}
                amount={costs[0].amount}
            />
            <CostItem
                date={costs[0].date}
                descrioption={costs[0].descrioption}
                amount={costs[0].amount}
            />
            <CostItem
                date={costs[0].date}
                descrioption={costs[0].descrioption}
                amount={costs[0].amount}
            />
        </div>
    );
}

export default App;
