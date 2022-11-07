import {CostItemType} from "../CostItem";
import classes from "./CostDate.module.css";

export const CostDate = (props: CostItemType) => {

    const month = props.date.toLocaleDateString('ru-RU',{month: "long"})
    const day = props.date.toLocaleDateString('ru-RU',{day: "2-digit"})
    const year = props.date.getFullYear()

    return (
        <div className={classes.costDate}>
            <div className={classes.costDate__month}>{month}</div>
            <div className={classes.costDate__year}>{year}</div>
            <div className={classes.costDate__day}>{day}</div>
        </div>
    )
}