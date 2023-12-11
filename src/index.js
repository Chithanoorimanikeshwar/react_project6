import React from "react";
import ReactDom from 'react-dom/client'
import routes from './routing'
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const rootContainer=document.getElementById('root')
const app=ReactDom.createRoot(rootContainer);


app.render(
    <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
    </Provider>
)

