
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "../components/Modal"
const App = () => {
  let [showprop, setShowprop] = useState(false)
  return (
    <div>
      <Modal showprop={showprop} setShowprop={setShowprop} />
    </div>
  )
}

export default App
