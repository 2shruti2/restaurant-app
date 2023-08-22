import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home  from './pages/Home/Home'
import {  Footer } from './container';
import { Navbar } from './components';
import './App.css';
import Productpage01 from './pages/Products/Productpage01';
import Productpage02 from './pages/Products/Productpage02';
import Productpage03 from './pages/Products/Productpage03';
import Productpage04 from './pages/Products/Productpage04';

const Layout = () =>{
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer />
     </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/productpage-01',
        element:<Productpage01/>
      },
      {  
      path:'/productpage-02',
        element:<Productpage02/>
      },
      {
        path:'/productpage-03',
        element:<Productpage03/>
      },
      {
        path:'/productpage-04',
        element:<Productpage04/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
