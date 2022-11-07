import s from './CostItem.module.css'
import {CostDate} from "./CostDate/CostDate";

export type CostItemType = {
    date: any
    descrioption: string
    amount: number
}

export const CostItem = (props: CostItemType) => {

    const{date, descrioption, amount}=props

    return (
        <div className={s.costItem}>

                <CostDate
                    date={date}
                    descrioption={descrioption}
                    amount={amount}
                />

            <div className={s.costItem__description}>
                <h2>{props.descrioption}</h2>
                <div className={s.costItem__price}>${props.amount}</div>
            </div>
        </div>
    )
}