import { getRadioPrograms } from '../api';
import { useAsync } from '../hooks';
import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import { sort_by_key } from '../helpers/utils';
import { FormattedMessage } from 'react-intl';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux';

const Radio = () => {
  const { id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();
  const { langCode: language } = useSelector((state) => state.language);

  useEffect(() => {
    triggerFunction(getRadioPrograms, id);
  }, [id, triggerFunction]);

  return loaded ? (
    <>
      <h2>
        <FormattedMessage id="radio.Programs" defaultMessage="Programs" />
      </h2>
      <ul>
        {sort_by_key(data, 'title').map((item, index) => {
          return (
            <li key={index}>
              <a href={`/${language}/radios/${id}/${item.id}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <ClipLoader />
  );
};

export default Radio;
