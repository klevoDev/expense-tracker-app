
type CardType = {
    children: any
    className: string // не понял как типизировать
}

export const Card = (props: CardType) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}