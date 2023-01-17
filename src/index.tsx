import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import {TaskGrid} from "./App/Component/TaskGrid/TaskGrid";
import {Menu, MenuItem} from "semantic-ui-react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Menu>
            <MenuItem className="header" as={"a"}>Lista de Tarefas</MenuItem>
        </Menu>
        <TaskGrid/>
    </React.StrictMode>
);