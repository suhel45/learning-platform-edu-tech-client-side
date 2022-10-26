import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
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
      }
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
