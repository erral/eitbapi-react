import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../store/actions/language';
import { useParams } from 'react-router-dom';
import {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE,
  isMultiLanguage,
} from '../../config/language';

const initialLoader = (App) => {
  return (props) => {
    const dispatch = useDispatch();
    const { lang } = useParams();
    useEffect(() => {
      if (isMultiLanguage) {
        if (
          AVAILABLE_LANGUAGES.map((language) => language.code).includes(lang)
        ) {
          dispatch(setLanguage(lang || DEFAULT_LANGUAGE));
        }
      }
    }, [lang, dispatch]);
    return <App {...props}>{props.children}</App>;
  };
};

export default initialLoader;
