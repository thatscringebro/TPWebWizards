import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from '../../components/Layout';
import '../../styles/Common.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {AppRoutes.map((route, index) => {
                            const { element, ...rest } = route;
                            return <Route key={index} {...rest} element={element} />;
                        })}
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}