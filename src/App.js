import React, { useState } from 'react'
import "./App.css"
import TodoInput from './component/TodoInput'
import ToList from './component/ToList';
function App() {
  const [listTodo, setListTodo] = useState([]);
  // const [first, setfirst] = useState(true)
  // const [inputText, setInputText] = useState('');

  let addList = (inputText) => {
    if (inputText !== '' ) {
      setListTodo([...listTodo, inputText]);
      // setInputText("")
      // setfirst(false)
    }
    else {
      alert("Enter something first")
    }
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <div classname="main-container" style={{ display: "flex", justifyContent: "center" }}>
      <div classname="center-container">

        <h1 classname="app-heading" style={{
          marginLeft: "5rem"
        }} >TODO</h1>
        <TodoInput addList={addList} />
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <>
              <ToList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App