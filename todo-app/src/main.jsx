// main.jsx: Entry point for your React app. Renders the App component inside the root DOM element.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './fanta.css'

createRoot(document.getElementById('root')).render(  // .render will inject the App component into the root element
  <StrictMode>
    <App />
  </StrictMode>,
)
