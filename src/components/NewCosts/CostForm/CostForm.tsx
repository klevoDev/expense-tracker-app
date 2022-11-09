import React, {useState} from "react";
import classes from "./CostForm.module.css";

export type NewCostType = {
    name: string
    amount: string
    date: string
}

export type CostFormPropsType = {
    getFullCost: (fullCost: NewCostType) => void
}

export const CostForm = (props: CostFormPropsType) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const nameChangeHandler = (event: { target: { value: string; }; }) => {
        setName(event.target.value)
    };

    const amountChangeHandler = (event: { target: { value: string; }; }) => {
        setAmount(event.target.value)
    };

    const dateChangeHandler = (event: { target: { value: string; }; }) => {
        setDate(event.target.value)
    };

    const submitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault() // отменяет перезагрузку страницы
        const costDate: NewCostType = {
            name,
            amount,
            date,
        }
        props.getFullCost(costDate)
        setName('') // обнуляем после нажатия
        setDate('')
        setAmount('')


        // props.onSaveCostDate(costDate);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.newCost__controls}>
                <div className={classes.newCost__control}>
                    <label>Название</label>
                    <input
                        type="text"
                        value={name}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className={classes.newCost__control}>
                    <label>Сумма </label>
                    <input
                        type="number"
                        value={amount}
                        min={0.1}
                        step={0.1}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className={classes.newCost__control}>
                    <label>Дата </label>
                    <input
                        type="date"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className={classes.newCost__actions}>
                    <button type={"submit"}>
                        Добавить расход
                    </button>
                </div>
            </div>
        </form>
    )
};