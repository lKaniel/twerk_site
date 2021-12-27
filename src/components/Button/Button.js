import React from 'react';
import * as classes from "./Button.module.scss";

const Button = ({
                    children,
                    onClick = ()=>{},
                    type = "button"
                }) => {
    return (
        <button className={classes.Button} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;
