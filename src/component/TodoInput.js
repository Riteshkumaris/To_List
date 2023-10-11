import React,{useState} from 'react'

function TodoInput(props) {
    const[inputText,setInputText]=useState("");
    const handleEnterPress =(e)=>{
      if(e.keyCode===13){
        props.addList(inputText)
        setInputText("")
      }
      
    }
  return (
   <div className="input-container">
    <input type="text" required classname="input-box-todo" placeholder='enter your todo' style={{width:"13rem" , height:"2rem"}}
    value={inputText}
     onChange={e=>{
        setInputText(e.target.value)
    }}
      onKeyDown={handleEnterPress}
    />
    <button classname="add-btn" style={{width:"2rem" , height:"2rem"}} onClick={()=>{
        props.addList(inputText)
        setInputText("")
    }}>+</button>
    <div>{inputText}</div>
   </div>
  )
}

export default TodoInput