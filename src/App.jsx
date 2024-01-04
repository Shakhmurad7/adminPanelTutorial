import { Route, Routes } from "react-router"
import Home from "./components/home"
import User from "./Pages/User"
import Dashboard from "./Pages/Dashboard"
import Status from "./Pages/Status"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Status" element={<Status/>}/>
      </Routes>
    </>
  )
}

export default App
