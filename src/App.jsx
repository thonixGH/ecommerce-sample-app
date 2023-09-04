import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
//import pages//
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
//import components//
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() { 
  return (
    <div className='overflow-hidden '>
    <Router>
      <Header/>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element=
        {<ProductDetails/>} />
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
   </div>
  )
}

export default App
