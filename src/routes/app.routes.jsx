import { Routes, Route } from "react-router-dom";

import {Blog} from '../pages/Blog'
import {Budget} from '../pages/Budget'
import {Home} from '../pages/Home'
import {Services} from '../pages/Services'

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/budget" element={<Budget/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
  )
}