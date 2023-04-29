import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AjaxTypePage,
  ArrayCardioPage01,
  ArrayCardioPage02,
  CanvasPage,
  CheckboxPage,
  ClockPage,
  CssPlaygroundPage,
  DevtoolTricksPage,
  DrumPage,
  HomePage,
  ImageGalleryPage,
  KeyDetectionPage,
  ReferenceAndCopyPage,
  ScrollSlideInPage,
  VideoPlayerPage,
} from './Pages';

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
        <Route path='10' element={<CheckboxPage />} />
        <Route path='11' element={<VideoPlayerPage />} />
        <Route path='12' element={<KeyDetectionPage />} />
        <Route path='13' element={<ScrollSlideInPage />} />
        <Route path='14' element={<ReferenceAndCopyPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
