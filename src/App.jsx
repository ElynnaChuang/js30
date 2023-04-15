import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ArrayCardioPage01,
  ClockPage,
  CssPlaygroundPage,
  DrumPage,
  HomePage,
} from './Pages';

const basename = '';

const App = () => (
  <div className='app'>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='01' element={<DrumPage />} />
        <Route path='02' element={<ClockPage />} />
        <Route path='03' element={<CssPlaygroundPage />} />
        <Route path='04' element={<ArrayCardioPage01 />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
