import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClockPage, DrumPage, HomePage } from './Pages';

const basename = '';

const App = () => (
  <div className='app'>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='01' element={<DrumPage />} />
        <Route path='02' element={<ClockPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
