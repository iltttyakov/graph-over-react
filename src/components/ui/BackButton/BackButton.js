import React from 'react';
import cls from './BackButton.module.scss'
import {NavLink} from "react-router-dom";
import Icons from "../Icons/Icons";

const BackButton = (
    {
        to,
        className = null,
        children
    }
) => {
    return (
        <NavLink className={[cls.container, className].join(' ')} to={to}>
            <Icons className={cls.icon} name={'arrow-left'} size={28}/>
            <span className={cls.text}>
                {children}
            </span>
        </NavLink>
    );
};

export default BackButton;
