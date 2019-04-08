import React, {
    Component
} from 'react'
import '../css/Slider.css'
import rightPng from '../img/right.png'
import leftPng from '../img/left.png'

// function Slider(){
// var oSlider = document.querySelector('.slider')
// oSlider.onmousedown = function(){
// }
// return(
//     <div className="wrapper-box">
//         <div className="rect">拖动滑块验证</div>
//         <div className="slider">
//             <img src="./img/right.png" alt=""/>
//         </div>
//     </div>
// )

// }
var isTrue = false
class Slider extends Component {
    constructor(props) {
        super(props)
        this.state={
            initX : '',
            initY : '',
            moveX : '',
            moveY : '',
            left : 0
        }
        this.handleMouseDown = this.handleMouseDown.bind(this)
        // this.handleMouseUp = this.handleMouseUp.bind(this)
    }
    render() {
        return (
            <div className="wrapper-box">
                <div className="rect">
                    <div className="bg"></div>
                    <div className="slider" onMouseDown={this.handleMouseDown}>
                        <img className="img" src={rightPng} alt="" />
                    </div>
                    <span className="text">拖动滑块验证</span>
                </div>
            </div>
        )
    }
    handleMouseDown(e){
        if(isTrue){
            return
        }
        var oSlider = document.querySelector('.slider'),
            oRect = document.querySelector('.rect'),
            oWrapper = document.querySelector('.wrapper-box'),
            oImg = document.querySelector('.img'),
            oBg = document.querySelector('.bg'),
            oText = document.querySelector('.text')
        this.state.initX = e.clientX 
        this.state.initY= e.clientY 
        

        document.onmousemove = (e) => {
            this.state.moveX = e.clientX 
            this.state.moveY= e.clientY 
            var left = this.state.left = this.state.moveX - this.state.initX 

            if(left < 0) {
                left = 0
            }else if( left >= oRect.offsetWidth - oSlider.offsetWidth){
                left = oRect.offsetWidth - oSlider.offsetWidth
                oImg.src=`${leftPng}` //前者是JSX语法,写在{}里面.后者是ES6语法
                document.onmousemove = null
                oText.style.color = '#fff'
                isTrue = true //开关,滑块验证成功后禁止往回拖,触发鼠标按下事件后,开关开启,return,后续代码不执行
            }
            
            oSlider.style.left = left + 'px'
            oBg.style.width = left +'px'

            document.onmouseup = (e) => {
                document.onmousemove = null
                console.log(this.state.left)
                if(this.state.left < oRect.offsetWidth - oSlider.offsetWidth){
                    oSlider.style.left = oBg.style.width = 0
                }
            }
            
        }
        
    }
    
    // handleMouseUp(e){
    //     var oSlider = document.querySelector('.slider'),
    //         oRect = document.querySelector('.rect')
    //     document.onmouseup = (e) => {
    //         document.onmousemove = null
    //     }
    //     console.log(this.state.left)
    //     if(this.state.left < oRect.offsetWidth - oSlider.offsetWidth){
    //         this.state.left = 0
    //     }
    // }
    // componentDidMount(){
    //     this.handleMouseUp()
    // }
}

export default Slider