import React from 'react'
import '../css/Lists.css'
// class Lists extends Component{
//     constructor(props){
//         super(props)

//     }
// }
const arr = ['js','html','css','node','vue','react']
const lists=arr.map((item) => {
    return <li key={item}>{item}</li>
})
console.log(lists)
/*
[object Array]: [Object, Object, Object, Object, Object, Object]
*/
export default lists