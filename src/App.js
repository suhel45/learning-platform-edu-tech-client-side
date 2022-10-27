import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CheckOut from './component/CheckOut';
import CourseDetails from './component/CourseDetails';
import Courses from './component/Courses';
import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import Register from './component/Register';
import Main from './layout/Main';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/category/:id',
        loader:({params})=>fetch(`https://assignment10-server-side-swart.vercel.app/category/${params.id}`),
        element:<Courses></Courses>
      },
      {
        path:'/category/checkout/:id',
        loader:({params})=>fetch(`https://assignment10-server-side-swart.vercel.app/category/${params.id}`),
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
