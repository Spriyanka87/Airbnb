import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Signup/Signup.jsx'
import Farm from './Component/Farms/Farm.jsx'
import Icon from './Component/Icon/Icon.jsx'
import Amazingpools from './Component/Amazing pools/Amajingpools.jsx'
import Countryside from './Component/Countryside/Countryside.jsx'
import Surfing from './Component/Surfing/Surfing.jsx'
import Arctic from './Component/Arctic/Arctic.jsx'
import Amazingviews from './Component/Amazing views/Amazingviews.jsx'
import Listing from './Component/Listing/Listing.jsx'
import Usercontext from './Context/Usercontext.jsx'
import Contact from './Component/Contactus/Contact.jsx'
import Footer from './Component/Footer/Footer.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Farm' element={<Farm/>}/>
    <Route path='Icon' element={<Icon/>}/>
    <Route path='Amazingpools' element={<Amazingpools/>}/>
    <Route path='Countryside' element={<Countryside/>}/>
    <Route path='Surfing' element={<Surfing/>}/>
    <Route path='Arctic' element={<Arctic/>}/>
    <Route path='Amazingviews' element={<Amazingviews/>}/>
    <Route path='Listing' element={<Listing/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Footer' element={<Footer/>}/>


  </Route>

))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext>
    <RouterProvider router ={router}/>
    </Usercontext>
  </StrictMode>,
)
