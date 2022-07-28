import React from 'react';
import cls from './TextInput.module.scss'
import makeId from "../../../utils/makeId";


const TextInput = (
    {
        placeholder = null,
        label = null,
        inputType = 'text',
        className = null
    }
) => {
    const id = makeId(5)

    return (
        <div className={[cls.container, className].join(' ')}>
            {
                label &&
                <label
                    htmlFor={id}
                    className={cls.label}
                >
                    {label}
                </label>
            }

            <div className={cls.fieldContainer}>
                <input
                    id={id}
                    className={cls.field}
                    type={inputType}
                    placeholder={placeholder}
                />
            </div>

        </div>
    );
};

export default TextInput;
