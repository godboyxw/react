exports function Clock2(props){
    return <p>现在的时间是{props.date.toLocaleTimeString()}</p>
}
setInterval(Clock2,1000)