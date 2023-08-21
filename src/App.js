import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";

import Home  from './pages/Home/Home'
import {  Footer } from './container';
import { Navbar } from './components';
import './App.css';
import GalleryPage01 from './pages/Gallery/GalleryPage01';
import GalleryPage02 from './pages/Gallery/GalleryPage02';
import GalleryPage03 from './pages/Gallery/GalleryPage03';
import GalleryPage04 from './pages/Gallery/GalleryPage04';

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
        path:'/gallerypage01',
        element:<GalleryPage01/>
      },
      {
        path:'/gallerypage02',
        element:<GalleryPage02/>
      },
      {
        path:'/gallerypage03',
        element:<GalleryPage03/>
      },
      {
        path:'/gallerypage04',
        element:<GalleryPage04/>
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
