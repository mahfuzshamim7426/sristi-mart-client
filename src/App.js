// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import './App.css';
function App() {
  return (
    <div className=''>
      <header className="">
        <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
