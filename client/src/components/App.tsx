// import { useState } from 'react'
// import './App.css'
import axios from 'axios'

function App() {

  const test = () => {
    axios.get('http://localhost:3000/')
    .then(success => console.log(success))
    .catch(err => console.log(err))
  }

  return (
    <div onClick={() => test()}>
      test
    </div>
  )
}


export default App;
