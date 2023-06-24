
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestion } from './Actions/question';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchAllQuestion())
  },[dispatch])
  return (
    <div className='App'>
      <BrowserRouter>
   <Navbar/>
   <AllRoutes/>
   </BrowserRouter>
   </div>
  );
}

export default App;
