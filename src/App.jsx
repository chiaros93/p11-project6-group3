import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/HomePage'
import SecondPage from './pages/SearchPage';


function App() {
  return (
    <>
    <Routes>
      <Route index Component={Main} />
      <Route path='/pages/secondpage' Component={SecondPage} />
    </Routes>
    </>
  );
}


export default App
