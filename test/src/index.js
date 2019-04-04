import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/js/App';
import If from './component/js/If'
import Lists from './component/js/Lists'
import Demo from './component/js/Demo'
import Clock from './component/js/Clock'
import {Canvas} from './component/js/Canvas'  //export导出函数, import{}导入

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div id="box">
        <App />
        <div className="wrapper">
            <If></If>
            <ul className="lists">{Lists}</ul>
            <Demo/>
            <Clock/>
        </div>
    </div> ,
    document.getElementById('root')
);

Canvas() //函数调用
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
