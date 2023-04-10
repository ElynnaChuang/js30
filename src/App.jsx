import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages';

const basename = '';

const App = () => (
  <div className='app'>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
