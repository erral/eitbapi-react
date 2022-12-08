import { Home, About } from '../pages';

export const INDEX_COMPONENT = Home;
const ROUTES = {
  ABOUT: {
    paths: {
      en: 'about',
      eu: 'honi-buruz',
      es: 'sobre-nosotros',
    },
    Component: About,
  },
};

export default ROUTES;
