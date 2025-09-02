// App.jsx: Main React component for your application. Handles UI and state logic for the counter demo.
import { useState, useEffect } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext' // Remove useAuth from here

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoCard } from './components/TodoCard'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { Login } from './components/Auth/Login'



function App() {
  // Remove this line as it won't work here
  // const { isLoggedIn } = useAuth() 

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true // this is to access the 'complete' state of the object
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }


  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = []
    // todo-app is the key and it should be unique 
    db = JSON.parse(localStorage.getItem('todo-app')) // because we are reading from JSON we need to parse 
    setTodos(db.todos)

  }, [])

  return (
    <AuthProvider>
      
      <AppContent 
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </AuthProvider>
  )
}
// we do it like this because authProvider context can only be used with its children 
// Create a new component to use the context
function AppContent({ todos, selectedTab, setSelectedTab, handleAddTodo, handleDeleteTodo, handleCompleteTodo }) {
  const { isLoggedIn } = useAuth() // Move useAuth here

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header todos={todos} />
          <Tabs
            todos={todos}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <TodoInput todos={todos} handleAddTodo={handleAddTodo} />
          <TodoList 
            todos={todos} 
            selectedTab={selectedTab} 
            handleDeleteTodo={handleDeleteTodo} 
            handleCompleteTodo={handleCompleteTodo} 
          />
          <Login />
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default App

