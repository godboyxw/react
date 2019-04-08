import React from 'react'
import '../css/Lists.css'
// class Lists extends Component{
//     constructor(props){
//         super(props)

//     }
// }
function Lists(){
    const arr = ['js','html','css','node','vue','react']
    const lists=arr.map((item,index) => {
        return <li key={index}>{item}</li>
    })
    console.log(lists)
    return lists
}
/*
[object Array]: [Object, Object, Object, Object, Object, Object]
}
*/
export default Lists

/**
 * React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: array.
 **/
//要export default一个函数,或者类,而不是数组