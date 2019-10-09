import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header";
import configStore from "../store";
import Routes from "./Routes";

const store = configStore();

export default () => (
    <Provider store={store}>
        <Router>
            <Header />
            <Routes />
        </Router>
    </Provider>
);
