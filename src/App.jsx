//useNavigate( ) ----> routing without loading

import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { lazy, Suspense } from 'react'
// import CountContext from './components/ContextCount'
const LazyLoad =lazy(()=>import('./components/LazyLoad'));

function App() {
  
  

  return (
    <>
    
    <BrowserRouter>
        <AppBar />
        <Routes>
           <Route path='/dashboard' element={<Dashboard/>}/>
           <Route path='/' element={<Landing/>}/>
           <Route path='/lazy' element={<Suspense fallback={"loading ..."}><LazyLoad /></Suspense>}/>
        </Routes>
    </BrowserRouter>
    {/* <CountContext/> */}
    </>
  ) 
}
function AppBar(){
  const navigate =useNavigate();
  function handleDashboard(){
    navigate("/dashboard");
  }
  function handleLanding(){
    navigate("/");
  }
  function handleLazy(){
    navigate("/lazy");
  }
  return(
  <div>
      <button onClick={handleLanding}>Landing</button>

      <button onClick={handleDashboard}>dashboard</button>
      <button onClick={handleLazy}>lazy</button>
    </div>

  )  
}

export default App
