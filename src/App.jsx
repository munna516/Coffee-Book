import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <div className='min-h-[calc(100vh-284px)] py-12 container mx-auto px-12'>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
