import React from 'react';
import cls from './ToggleInput.module.scss'
import makeId from "../../../utils/makeId";

const ToggleInput = (
    {
        label = null,
        className = null
    }
) => {
    const id = makeId(5)

    return (
        <div className={[cls.container, className].join(' ')}>
            <input
                type={'checkbox'}
                className={cls.field}
                id={id}
            />
            <label
                htmlFor={id}
                className={cls.toggle}
            >
                {
                    label &&
                    <span className={cls.label}>{label}</span>
                }
            </label>
        </div>
    );
};

export default ToggleInput;
