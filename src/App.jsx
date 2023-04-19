import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AjaxTypePage,
  ArrayCardioPage01,
  ArrayCardioPage02,
  CanvasPage,
  ClockPage,
  CssPlaygroundPage,
  DevtoolTricksPage,
  DrumPage,
  HomePage,
  ImageGalleryPage,
} from './Pages';

// const basename = process.env.PUBLIC_URL;

const App = () => (
  <div className='app'>
    <BrowserRouter basename='/js30'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='01' element={<DrumPage />} />
        <Route path='02' element={<ClockPage />} />
        <Route path='03' element={<CssPlaygroundPage />} />
        <Route path='04' element={<ArrayCardioPage01 />} />
        <Route path='05' element={<ImageGalleryPage />} />
        <Route path='06' element={<AjaxTypePage />} />
        <Route path='07' element={<ArrayCardioPage02 />} />
        <Route path='08' element={<CanvasPage />} />
        <Route path='09' element={<DevtoolTricksPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
