import './App.scss';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routesConfig';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter basename='/js30'>
        <Routes>
          {routes.map(el => {
            if (el.id === 0) {
              return <Route key={el.id} path={el.path} element={el.element} />;
            }
            return (
              <Route
                key={el.id}
                path={el.path}
                element={
                  <Suspense key={el.id} fallback={<div>Load</div>}>
                    {el.element}
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
