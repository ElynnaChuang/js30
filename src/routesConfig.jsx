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
const WebCamPage = lazy(() => import('./Pages/19Webcam'));
const SpeechRecognitionPage = lazy(() => import('./Pages/20SpeechRecognition'));
const GeolocationPage = lazy(() => import('./Pages/21Geolocation'));
const FollowLinksPage = lazy(() => import('./Pages/22FollowLinks'));
const WordToSpeechPage = lazy(() => import('./Pages/23WordToSpeech'));
const StickyNavPage = lazy(() => import('./Pages/24StickyNav'));
const EventPage = lazy(() => import('./Pages/25Event'));
const NavDropdownPage = lazy(() => import('./Pages/26NavDropdown'));
const ClickAndDragPage = lazy(() => import('./Pages/27ClickAndDrag'));
const SpeedControllerPage = lazy(() => import('./Pages/28SpeedController'));
const CountdownPage = lazy(() => import('./Pages/29Countdown'));
const MoleGamePage = lazy(() => import('./Pages/30MoleGame'));

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
  { id: 19, path: '19', element: <WebCamPage /> },
  { id: 20, path: '20', element: <SpeechRecognitionPage /> },
  { id: 21, path: '21', element: <GeolocationPage /> },
  { id: 22, path: '22', element: <FollowLinksPage /> },
  { id: 23, path: '23', element: <WordToSpeechPage /> },
  { id: 24, path: '24', element: <StickyNavPage /> },
  { id: 25, path: '25', element: <EventPage /> },
  { id: 26, path: '26', element: <NavDropdownPage /> },
  { id: 27, path: '27', element: <ClickAndDragPage /> },
  { id: 28, path: '28', element: <SpeedControllerPage /> },
  { id: 29, path: '29', element: <CountdownPage /> },
  { id: 30, path: '30', element: <MoleGamePage /> },
];
