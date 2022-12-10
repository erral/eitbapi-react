import React from 'react';
import { getRadios } from '../api';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Radios = () => {
  const { langCode: language } = useSelector((state) => state.language);

  const radios = getRadios();
  return (
    <div>
      <ul>
        {radios.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/${language}/radios/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
