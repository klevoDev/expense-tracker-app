import s from './CostItem.module.css'
import {CostDate} from "./CostDate/CostDate";
import {Card} from "../../UI/Card";
import React, {useState} from "react";

export type CostItemType = {
    date: any // пока ищу
    descrioption: string
    amount: number
}

export const CostItem = (props: CostItemType) => {
    const [descrioption, setDescrioption] = useState(props.descrioption);

    const changeDescrioptionHandler = () => {
        setDescrioption('dsf')
    }

    return (
        <Card className={s.costItem}>

                <CostDate
                    date={props.date}
                    descrioption={props.descrioption}
                    amount={props.amount}
                />

            <div className={s.costItem__description}>
                <h2>{descrioption}</h2>
                <div className={s.costItem__price}>${props.amount}</div>
            </div>
            <button onClick={changeDescrioptionHandler}>Изменить описание</button>
        </Card>
    )
}