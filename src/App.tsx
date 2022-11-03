import React from 'react';
import './App.css';
import {CostItem} from "./components/CostItem";

function App() {
    const [count, setCount] = React.useState(0)
    return (
        <div className="App">
            <h1>ntcn</h1>
            <CostItem />
        </div>
    );
}

export default App;
