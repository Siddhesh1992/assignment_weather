import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/Header.js';
import AddCity from './pages/AddCity.js';
import City from './pages/City.js';
import ShowWeather from './pages/ShowWeather.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<City />} />
        <Route path='/:skip/:limit' element={<City />} />
        <Route path='/addCity' element={<AddCity />} />
        <Route path='/showWeather/:id' element={<ShowWeather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
