import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';
import { getTVs } from '../api';
import { sort_by_key } from '../helpers/utils';
import { useSelector } from 'react-redux';

const TVs = () => {
  const { langCode: language } = useSelector((state) => state.language);

  const LANGUAGE = language.toUpperCase();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getTVs);
  }, [triggerFunction]);

  return (
    <Container>
      {loaded ? (
        <>
          <h1>
            <FormattedMessage id="tvs.Category" defaultMessage="Categories" />
          </h1>
          <ul>
            {sort_by_key(data.web_clasif, `CLASIFICACION_${LANGUAGE}`).map(
              (item, index) => {
                return (
                  <li key={index}>
                    <a href={`/${language}/tvs/${item.CLASIFICACION}`}>
                      {item[`CLASIFICACION_${LANGUAGE.toUpperCase()}`]}
                    </a>
                  </li>
                );
              },
            )}
          </ul>
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};

export default TVs;
