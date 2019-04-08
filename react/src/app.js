var React = require("react");
var ReactDOM = require("react-dom");
import './index.css'
import Clock from './component/js/Clock'
import Demo from './component/js/Demo'
import If from './component/js/If'
import Slider from './component/js/Slider'
import Lists from './component/js/Lists'
// import {Canvas} from './component/js/Canvas'


ReactDOM.render(
        <div>
            <h2>hello react</h2>
            <h1>welcome</h1>
            <Clock/>
            <Demo/>
            <If/>
            <Slider/>
        </div>
        ,document.querySelector("#app")
    );
   // Canvas()