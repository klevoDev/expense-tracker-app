import classes from "./NewCost.module.css";
import {CostForm} from "./CostForm/CostForm";

export const NewCost = () => {
    return (
        <div className={classes.newCost}>
            <CostForm/>
        </div>
    )
}