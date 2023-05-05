import { lazy } from 'react';
import HomePage from './Pages/HomePage';

const DrumPage = lazy(() => import('./Pages/01Drums'));
const ClockPage = lazy(() => import('./Pages/02Clock'));
const CssPlaygroundPage = lazy(() => import('./Pages/03CssPlayground'));
const ArrayCardioPage01 = lazy(() => import('./Pages/04ArrayCardio'));
const ImageGalleryPage = lazy(() => import('./Pages/05ImageGallery'));
const AjaxTypePage = lazy(() => import('./Pages/06AjaxType'));
const ArrayCardioPage02 = lazy(() => import('./Pages/07ArrayCardio'));
const CanvasPage = lazy(() => import('./Pages/08Canvas'));
const DevtoolTricksPage = lazy(() => import('./Pages/09DevtoolTricks'));
const CheckboxPage = lazy(() => import('./Pages/10Checkbox'));
const VideoPlayerPage = lazy(() => import('./Pages/11VideoPlayer'));
const KeyDetectionPage = lazy(() => import('./Pages/12KeyDetection'));
const ScrollSlideInPage = lazy(() => import('./Pages/13ScrollSlideIn'));
const ReferenceAndCopyPage = lazy(() => import('./Pages/14ReferenceAndCopy'));
const LocalStoragePage = lazy(() => import('./Pages/15LocalStorage'));
const MouseMovePage = lazy(() => import('./Pages/16MouseMove'));
const SortPage = lazy(() => import('./Pages/17Sort'));
const ReduceTimePage = lazy(() => import('./Pages/18Reduce'));

export const routes = [
  { id: 0, path: '/', element: <HomePage /> },
  { id: 1, path: '01', element: <DrumPage /> },
  { id: 2, path: '02', element: <ClockPage /> },
  { id: 3, path: '03', element: <CssPlaygroundPage /> },
  { id: 4, path: '04', element: <ArrayCardioPage01 /> },
  { id: 5, path: '05', element: <ImageGalleryPage /> },
  { id: 6, path: '06', element: <AjaxTypePage /> },
  { id: 7, path: '07', element: <ArrayCardioPage02 /> },
  { id: 8, path: '08', element: <CanvasPage /> },
  { id: 9, path: '09', element: <DevtoolTricksPage /> },
  { id: 10, path: '10', element: <CheckboxPage /> },
  { id: 11, path: '11', element: <VideoPlayerPage /> },
  { id: 12, path: '12', element: <KeyDetectionPage /> },
  { id: 13, path: '13', element: <ScrollSlideInPage /> },
  { id: 14, path: '14', element: <ReferenceAndCopyPage /> },
  { id: 15, path: '15', element: <LocalStoragePage /> },
  { id: 16, path: '16', element: <MouseMovePage /> },
  { id: 17, path: '17', element: <SortPage /> },
  { id: 18, path: '18', element: <ReduceTimePage /> },
];
