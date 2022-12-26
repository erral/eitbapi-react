import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import { AVAILABLE_LANGUAGES } from '../../config';
import useChangeLanguage from '../../hooks/useChangeLanguage';
import './LanguageSelector.scss';

const LanguageSelector = () => {
  const selectedLangCode = useSelector((state) => state?.language?.langCode);
  const { changeLanguage } = useChangeLanguage();
  return (
    <NavDropdown
      title={
        <FormattedMessage
          id="langselector.ChangeLanguage"
          defaultMessage="Change Language"
        />
      }
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
