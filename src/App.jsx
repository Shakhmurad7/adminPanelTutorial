import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import User from "./Pages/User"
import Dashboard from "./Pages/Dashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
