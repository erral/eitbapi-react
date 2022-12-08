import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { AVAILABLE_LANGUAGES } from '../../config';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import './LanguageSelector.scss';
import useChangeLanguage from '../../hooks/useChangeLanguage';

const LanguageSelector = () => {
  const selectedLangCode = useSelector((state) => state?.language?.langCode);
  const { changeLanguage } = useChangeLanguage();
  return (
    <NavDropdown
      title={<FontAwesomeIcon icon={faLanguage} />}
      id="basic-nav-dropdown"
      className="d-flex"
    >
      {AVAILABLE_LANGUAGES.map((language) => (
        <NavDropdown.Item
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          className={language.code === selectedLangCode ? 'selected' : ''}
        >
          {language.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default LanguageSelector;
