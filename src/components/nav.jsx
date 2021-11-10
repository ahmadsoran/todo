import * as React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './home';
import Todo from './todo';
export default function Nav() {
 
    return (
      <React.Fragment>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
      </React.Fragment>
    )
}
