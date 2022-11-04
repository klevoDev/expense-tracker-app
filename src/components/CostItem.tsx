import s from './CostItem.module.css'


type CostItemType = {
    date: any
    descrioption: string
    amount: number
}

export const CostItem = (props: CostItemType) => {

    // let costDate: Date = new Date(2022, 2, 12);
    // const costDescrioption = 'холодельник';
    // const costAmount = 1000;

    return (
        <div className={s.costItem}>
            <div>{props.date.toDateString()}</div>
            <div className={s.costItem__description}>
                <h2>{props.descrioption}</h2>
                <div className={s.costItem__price}>${props.amount}</div>
            </div>
        </div>
    )
}