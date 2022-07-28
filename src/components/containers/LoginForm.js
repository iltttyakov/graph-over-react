import React from 'react';
import authFormCls from '../ui/AuthFormUI/AuthFormUI.module.scss'
import TextInput from "../ui/TextInput/TextInput";
import ToggleInput from "../ui/ToggleInput/ToggleInput";
import Button from "../ui/Button/Button";
import Link from "../ui/Link/Link";


const LoginForm = () => {
    return (
        <form>

            <p className={authFormCls.title}>
                С возвращением!
            </p>
            <p className={authFormCls.switch}>
                У вас нет учетной записи? <Link to={'#'} className={authFormCls.link}>Зарегистрироваться</Link>
            </p>

            <TextInput
                label={'Email'}
                inputType={'email'}
                placeholder={'Ваш адрес электронной почты'}
                className={authFormCls.item}
            />

            <TextInput
                label={'Пароль'}
                inputType={'password'}
                placeholder={'Ваш пароль'}
                className={authFormCls.item}
            />

            <ToggleInput
                label={'Запомнить меня'}
                className={authFormCls.toggle}
            />

            <Button className={authFormCls.button}>
                Войти
            </Button>

            <p className={authFormCls.forgot}>
                Забыли пароль? <Link to={'#'} className={authFormCls.link}>Восстановить</Link>
            </p>


        </form>
    );
};

export default LoginForm;
