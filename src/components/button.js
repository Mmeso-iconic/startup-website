import React from 'react';
import './button.css' 
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--secondary'];

const SIZES = ['btn--medium' , 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    className = '',
    to,
    noLink = false, // ✅ new prop
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const classes = `btn ${checkButtonStyle} ${checkButtonSize} ${className}`.trim();

        if (!noLink && to) {
        return (
        <Link to={to} className="btn-mobile">
            <button className={classes} type={type} onClick={onClick}>
            {children}
            </button>
        </Link>
        );
    }

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
        {children}
        </button>

    );
};