import React from 'react';
import cls from './Button.module.scss'


const Button = (
    {
        className = null,
        children
    }
) => {
    return (
        <button className={[cls.button, className].join(' ')}>
            {children}
        </button>
    );
};

export default Button;
