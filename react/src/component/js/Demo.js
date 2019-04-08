import React,{Component} from 'react'
var arr = [1,2,3]
class Demo extends Component {
    constructor(props){
        super(props)
        this.state={
            data : arr
        }
    }
    render(){
        return (
            <div>
                <h1>hello world</h1>
                {
                    this.state.data.length>0 && <h2>您有{this.state.data.length}条消息要读</h2>
                }
                <button onClick={(e) => {this.ChangeState(e)}}>change state</button>
            </div>
        )
    }
    ChangeState(){
        arr.push(1)
        this.setState({
             data : arr
        })
        console.log(this.state,this.state.data.length)
    }
     
}

export default Demo