import {CostItem, CostItemType} from "./CostItem/CostItem";
import classes from "./Costs.module.css";
import React from "react";

type CostsType = {
    costs: Array<CostItemType>
}

export const Costs = (props: CostsType) => {

    const{costs}=props

    return (
        <div className={classes.costs}>
            <CostItem
                date={costs[0].date}
                descrioption={costs[0].descrioption}
                amount={costs[0].amount}
            />
            <CostItem
                date={costs[1].date}
                descrioption={costs[1].descrioption}
                amount={costs[1].amount}
            />
            <CostItem
                date={costs[2].date}
                descrioption={costs[2].descrioption}
                amount={costs[2].amount}
            />

        </div>
    )
}