import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Login from './component/login';
import Register from './component/register';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
       {
      path:"/",
      element:<Login/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/register",
      element:<Register/>
    },]
  }
 

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter}/>);

reportWebVitals();
