import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root')
const root = createRoot(container)

const app = (
    <BrowserRouter basename={'/'}>
        <App/>
    </BrowserRouter>
)

root.render(app)
