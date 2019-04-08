import React,{Component} from 'react'
class Clock extends Component{
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
    }
}
export default Clock