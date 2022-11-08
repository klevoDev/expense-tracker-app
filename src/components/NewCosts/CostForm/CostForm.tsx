import classes from "./CostForm.module.css";

export const CostForm = () => {
    return (
        <form>
            <div className={classes.newCost__controls}>
                <div className={classes.newCost__control}>
                    <label>Название</label>
                    <input type="text"/>
                </div>
                <div className={classes.newCost__control}>
                    <label>Сумма </label>
                    <input type="number" min={0.1} step={0.1}/>
                </div>
                <div className={classes.newCost__control}>
                    <label>Дата </label>
                    <input type="date" />
                </div>
                <div className={classes.newCost__actions}>
                    <button type={"submit"}>
                        Добавить расход
                    </button>
                </div>
            </div>
        </form>
    )
}