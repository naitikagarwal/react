// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type:'a',
  props: {
      href: "https://google.com",
      target: "_blank"

  },
  children : "Click me to visit GOOGLE"
}

function MyApp(){
  return(
    <div>
      <h1>Custom React</h1>
    </div>
  )
}
function AnotherElement(){
  <a href="http://google.com" target='_blank'>Google</a>
}

createRoot(document.getElementById('root')).render(
    // MyApp()
    <App />

)
