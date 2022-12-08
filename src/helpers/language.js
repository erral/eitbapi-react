import { DEFAULT_LANGUAGE, DB_KEYS } from '../config';
import { getStorage, setStorage } from './storage';

export const changeLanguage = async (language) => {
  const currentLanguage =
    (await getStorage(DB_KEYS.LANGUAGE)) || DEFAULT_LANGUAGE;
  if (currentLanguage === language) {
    return null;
  }
  await setStorage(DB_KEYS.LANGUAGE, language);
  return language;
};

export const getLanguage = async () => {
  const language = (await getStorage(DB_KEYS.LANGUAGE)) || DEFAULT_LANGUAGE;
  return language;
};
