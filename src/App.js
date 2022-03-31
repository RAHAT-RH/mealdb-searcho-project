import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import FoodDetails from './component/FoodDetails/FoodDetails';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NoFoundPage from './component/NoFoundPage/NoFoundPage';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/foodDetails/:foodId' element={<FoodDetails></FoodDetails>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='*' element={<NoFoundPage></NoFoundPage>}/>
      </Routes>
    </div>
  );
}

export default App;
