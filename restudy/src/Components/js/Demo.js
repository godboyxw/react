import React,{Component} from 'react'
import '../css/demo.css'

class Demo extends Component{
    constructor(props){
        super(props)
        this.state={
            date : new Date()
        }
    }
    render(){
        return(
            <h1>现在的时间是{this.state.date.toLocaleTimeString()}</h1>
        )
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
             this.tick()
         },1000)
     }
     componentWillUnmount(){
         clearInterval(this.timer)
     }
     tick(){
         this.setState({
             date : new Date()
         })
         document.getElementsByTagName('h1')[0].style.backgroundColor = '#'+ Math.random(0,1).toString(16).slice(-6)
     }
}
export default Demo