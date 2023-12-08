
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar'
import Adminsignup from './components/Adminsignup'
import Datafile from './components/Datafile'
import Viewapi from './components/Viewapi'

function App() {


  return (
    <>
 <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

    <Navbar/>
    <Routes>
    <Route path='/dashboard' element={<Sidebar/>}/>
    <Route path='/admin' element={<Adminsignup/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/> 
    <Route path='/' element={ <Home/>}/>
    <Route path='/api' element={ <Datafile/>}/>
   
      <Route path='/blogs/:id' element={<Viewapi/>} />
    </Routes>
  
    </>
  )
}

export default App
