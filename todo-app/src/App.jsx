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

  const todos = [
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries!', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true },
  ]
  return (
    <>
      <Header todos={todos}/>
      <Tabs  todos={todos}/>
     
      <TodoInput  todos={todos}/>
      <TodoList  todos={todos}/>
    </>
  )

}

export default App

