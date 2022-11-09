import classes from "./NewCost.module.css";
import {CostForm, NewCostType} from "./CostForm/CostForm";




export const NewCost = () => {
    const getCost = (fullCost: NewCostType) => {
        alert(JSON.stringify(fullCost, null, 2))
    }
    return (
        <div className={classes.newCost}>
            <CostForm getFullCost={getCost}/>
        </div>
    );

}