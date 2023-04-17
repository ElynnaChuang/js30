import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AjaxTypePage,
  ArrayCardioPage01,
  ClockPage,
  CssPlaygroundPage,
  DrumPage,
  HomePage,
  ImageGalleryPage,
} from './Pages';

const basename = process.env.PUBLIC_URL;

const App = () => (
  <div className='app'>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='drum' element={<DrumPage />} />
        <Route path='02' element={<ClockPage />} />
        <Route path='03' element={<CssPlaygroundPage />} />
        <Route path='04' element={<ArrayCardioPage01 />} />
        <Route path='05' element={<ImageGalleryPage />} />
        <Route path='06' element={<AjaxTypePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
