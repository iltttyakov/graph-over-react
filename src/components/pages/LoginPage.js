import React from 'react';
import LoginForm from "../containers/LoginForm";
import AuthLayout from "../sections/AuthLayout/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm/>
        </AuthLayout>
    );
};

export default LoginPage;
