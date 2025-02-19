import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Footer from "./components/Footer"; 
import Navbar from "./components/Navbar"; 
import Home from "./views/Home/Home";
import TrainExplorer from "./views/TrainSearch/TrainExplorer";

import TrainSchedule from "./views/TrainSchedule/TrainSchedule.jsx"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train-explorer" element={<TrainExplorer />} />

        <Route path="train-schedules"element={< TrainSchedule/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App