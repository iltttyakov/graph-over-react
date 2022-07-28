import React from 'react';
import cls from './Link.module.scss'
import {NavLink} from "react-router-dom";


const Link = (
    {
        to,
        className = null,
        children
    }
) => {
    return (
        <NavLink to={to} className={[cls.link, className].join(' ')}>
            {children}
        </NavLink>
    );
};

export default Link;
