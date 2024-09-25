
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import VendingMachine from './VendingMachine'
import { Candy, Chips, Soda } from './Snack'

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path='/snack/chips' element={<Chips />} />
        <Route path='/snack/candy' element={<Candy />} />
        <Route path='/snack/soda' element={<Soda />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
