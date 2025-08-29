// App.jsx: Main React component for your application. Handles UI and state logic for the counter demo.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoCard } from './components/TodoCard'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'


function App() {

  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
  }

  function handleEditTodo() {

  }

  function handleDeleteTodo() {

  }
  return (
    <>
      <Header todos={todos} />
      <Tabs 
        todos={todos} // The array of todo items, used to display counts or filter todos by tab
        selectedTab={selectedTab} // The currently selected tab (e.g., 'Open', 'Completed', etc.)
        setSelectedTab={setSelectedTab} // Function to update the selected tab when the user clicks a tab
      /> 
      <TodoInput todos={todos} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} selectedTab={selectedTab}/>
    </>
  )

}

export default App

