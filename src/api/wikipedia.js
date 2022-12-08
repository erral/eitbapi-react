import api from './api';

export const getWikipediaPage = () => {
  return api.get(`/page/summary/codesyntax`);
};
