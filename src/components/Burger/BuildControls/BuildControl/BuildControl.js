import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={props.ingredientRemover}
                disabled={props.removerDisabled}>Less</button>
            <button className={classes.More} onClick={props.ingredientAdder}>More</button>
        </div>
    );
}

export default buildControl;