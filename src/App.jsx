import React from 'react'
import './App.css'
import SimpleCounterComponent from './Components/SimpleCounterComponent'
import PureCounterComponent from './Components/PureCounterComponent'

function App() {
  
  return (
    <>
      <div className='main'>
        <SimpleCounterComponent/>
        <PureCounterComponent/>
      </div>
    </>
  )
}

export default App