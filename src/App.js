import React from 'react';

import './styles/normalize.scss'
import './styles/general.scss'
import './fonts/fonts.scss'
import LoginPage from "./components/pages/LoginPage";
import {Route, Routes} from "react-router-dom"


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<LoginPage/>}/>
        </Routes>
    );
};

export default App;
