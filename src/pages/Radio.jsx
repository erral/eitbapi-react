import { getRadioPrograms } from '../api';
import { useAsync } from '../hooks';
import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import { sort_by_key } from '../helpers/utils';
import { FormattedMessage } from 'react-intl';
import ClipLoader from 'react-spinners/ClipLoader';

const Radio = () => {
  const { id } = useParams();

  const { triggerFunction, data, loading, loaded } = useAsync();
  const language = 'en';

  useEffect(() => {
    triggerFunction(getRadioPrograms, id);
  }, [getRadioPrograms]);

  return loaded ? (
    <>
      <h2>
        <FormattedMessage id="radio.Programs" defaultMessage="Programs" />
      </h2>
      <ul>
        {sort_by_key(data, 'title').map((item, index) => {
          return (
            <li>
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
