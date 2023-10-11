import React from 'react'
import "./Tolist.css"

function ToList(props) {
  return (
    <>
 <li classname="list-item" style={{backgroundColor:"yellow", border:"2px solid black" , height:"2rem"}}>
    {props.item}
    <span className='icon'>
    <i class="fa-solid fa-trash-can icon-delete" style={{marginLeft:"105px"}}
    onClick={e=>{
      props.deleteItem(props.index)
    }}></i>
    </span>
 </li>
 </>
  )
}

export default ToList