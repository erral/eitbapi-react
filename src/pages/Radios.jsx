import { getRadios } from '../api';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Radios = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getRadios);
  }, [triggerFunction]);

  return (
    <div>
      {loaded ? (
        <ul>
          {data?.radios?.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/${language}/radios/${item.slug}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <ClipLoader />
      )}
    </div>
  );
};
