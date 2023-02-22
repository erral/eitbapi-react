import React from 'react';
// Eslint disables the following line
// import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/global.scss';
import { Navbar } from './components';

import { Container } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
// import Routes from './Routes';
import './formatjs-polyfills';
import messages_eu from './locales/eu/eu.json';
import messages_es from './locales/es/es.json';
import messages_en from './locales/en/en.json';

import { useSelector } from 'react-redux';
import initialLoader from './helpers/hocs/initialLoader';
import { Outlet } from 'react-router-dom';

const messages = {
  eu: messages_eu,
  es: messages_es,
  en: messages_en,
};

function App() {
  const { langCode } = useSelector((state) => state.language);

  return (
    <IntlProvider locale={langCode} messages={messages[langCode]}>
      <Navbar />
      <Container className="page-container">
        <Outlet />
      </Container>
    </IntlProvider>
  );
}

export default initialLoader(App);
