import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './Components/ProductList'
import ProductDisplay from './Components/ProductDisplay'
import Cart from './Components/Cart'

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  // const [response, setResponse] = useState('')

  // // call server to see if its running
  // useEffect(() => {
  //   const getApiResponse = () => {
  //     fetch('http://localhost:5000/')
  //       .then((res) => res.text())
  //       .then((res) => setResponse(res))
  //   }
  //   getApiResponse()
  // }, [])
  // -------------------------------------------------

  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/a' element={<ProductDisplay/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
