import React from 'react';
import { getRadios } from '../api';

const Radios = () => {
  const language = 'en';
  const radios = getRadios();
  return (
    <div>
      <ul>
        {radios.map((item, index) => {
          return (
            <li key={index}>
              <a href={`/${language}/radios/${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Radios;
