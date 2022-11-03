import s from './CostItem.module.css'

export const CostItem = () => {
    return (
        <div className={s.costItem}>
            <div>март 2021 23</div>
            <div className={s.costItem__description}>
                <h2>Холодельник</h2>
                <div className={s.costItem__price}>$1000</div>
            </div>
        </div>
    )
}