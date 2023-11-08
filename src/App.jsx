import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage'
import SecondPage from './pages/SecondPage';


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
