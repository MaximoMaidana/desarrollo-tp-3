import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Index from "./pages/Index"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Index />}/>
          <Route path="/pokemon/:name"  element={<Index />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App