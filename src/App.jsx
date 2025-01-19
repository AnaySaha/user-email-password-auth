
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
  path: "/",
  element: <div> Hellow World</div>,
  }
  ]);

function App() {
  return (
    <>
     
      <h1>Vite + React</h1>
     
      
    </>
  )
}

export default App
