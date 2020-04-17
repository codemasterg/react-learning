import React, { Fragment } from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => {
    return (
        <Fragment>
        
        
        
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl 
                    label={ctrl.label} 
                    key={ctrl.label}
                    ingredientAdder={() => props.ingredientAdder(ctrl.type)}
                    ingredientRemover={() => props.ingredientRemover(ctrl.type)}  
                    removerDisabled={props.ingredientCounts[ctrl.type] <= 0} />
            ))}
            <p>Total price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.ordered}> ORDER NOW</button>
        </div>
        </Fragment>
    )
}

export default buildControls;