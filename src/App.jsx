import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DrumPage, HomePage } from './Pages';

const basename = '';

const App = () => (
  <div className='app'>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='01' element={<DrumPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
