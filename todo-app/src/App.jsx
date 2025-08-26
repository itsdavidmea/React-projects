// App.jsx: Main React component for your application. Handles UI and state logic for the counter demo.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import {Tabs} from './components/Tabs'
import {TodoCard} from './components/TodoCard'
import {TodoInput} from './components/TodoInput'
import {TodoList} from './components/TodoList'

function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <TodoCard />
      <TodoInput />
      <TodoList />
    </div>
  )
  
}

export default App

