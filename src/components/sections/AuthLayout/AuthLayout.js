import React from 'react';
import cls from './AuthLayout.module.scss'
import {isWebpSupported} from 'react-image-webp/dist/utils';
import BackButton from "../../ui/BackButton/BackButton";

import coverJpg from './cover.jpg'
import coverWebp from './cover.webp'
import logoWhite from './logo-white.svg'
import logoDarkBlue from './logo-dark-blue.svg'

const cover = isWebpSupported() ? coverWebp : coverJpg

const AuthLayout = ({children}) => {
    return (
        <div className={cls.container}>

            <div className={cls.left}>
                <div className={cls.main}>

                    <div className={cls.top}>
                        <BackButton to={'#'} className={cls.back}>
                            Вернуться назад
                        </BackButton>

                        <div className={cls.logoContainer}>
                            <img
                                className={cls.logo}
                                src={logoDarkBlue}
                                width={62} height={32}
                                alt={'Логотип GraphOver'}
                            />
                        </div>
                    </div>

                    <div className={cls.card}>
                        {children}
                    </div>

                </div>

                <div className={cls.rectangleBig}/>
                <div className={cls.rectangleSmall}/>

            </div>

            <div className={cls.cover} style={{
                backgroundImage: `url("${cover}")`
            }}>
                <img
                    width={225} height={116}
                    src={logoWhite}
                    alt={'Логотип GraphOver'}
                    className={cls.logoCover}
                />
            </div>

        </div>
    );
};

export default AuthLayout;
