import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClockPage, CssPlaygroundPage, DrumPage, HomePage } from './Pages';

const basename = '';

const App = () => (
  <div className='app'>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='01' element={<DrumPage />} />
        <Route path='02' element={<ClockPage />} />
        <Route path='03' element={<CssPlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
