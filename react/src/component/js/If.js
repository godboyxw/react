import React, { Component } from 'react';
import '../css/If.css'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin :false
        }
        this.ChangeLoginOut = this.ChangeLoginOut.bind(this)
        this.ChangeLoginIn = this.ChangeLoginIn.bind(this)
    }
    ChangeLoginOut(){
        this.setState(
            {isLogin: false}
        )
    }
    ChangeLoginIn(){
        this.setState(
            {isLogin: true}
        )
    }
    render(){
        let button
        if(this.state.isLogin){
            button= <button onClick = {this.ChangeLoginOut}>按钮</button>
        }else{
            button= <button onClick = {this.ChangeLoginIn}>按钮</button>
        }
        return (
            <div className="if">
                <LoginControl isLogin={this.state.isLogin}/>
                {button}
            </div>
        )
    }
}
function LoginOut(props) {
    return <h1> 登出 </h1>
}

function LoginIn(props) {
    return <h1> 登录 </h1>
}

function LoginControl(props) {
    if (props.isLogin) {
        return <LoginOut />
    } else {
        return <LoginIn />
    }
}
export default Login