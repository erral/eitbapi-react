import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { ROUTES } from './config';
import { Home } from './pages';

const AppRoutes = () => {
  const { langCode } = useSelector((state) => state.language);
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to={'/' + langCode} />}></Route>
      <Route exact path="/:lang" element={<App />} basename="/eitbapi-react">
        <Route index element={<Home />} basename="/eitbapi-react" />
        {Object.values(ROUTES).map((route) => {
          return Object.values(route.paths).map((path, key) => {
            return (
              <Route
                key={key}
                path={path}
                element={<route.Component />}
                basename="/eitbapi-react"
              />
            );
          });
        })}
      </Route>
    </Routes>
  );
};
export default AppRoutes;
