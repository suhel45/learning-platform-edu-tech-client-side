import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CourseDetails from './component/CourseDetails';
import Courses from './component/Courses';
import Login from './component/Login';
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
        path:'/course',
        loader:()=>fetch("http://localhost:5000/courses"),
        element:<Courses></Courses>
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
