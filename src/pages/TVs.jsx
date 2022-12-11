import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';
import { getTVCategories } from '../api';
import { sort_by_key } from '../helpers/utils';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const TVs = () => {
  const { langCode: language } = useSelector((state) => state.language);

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getTVCategories);
  }, [triggerFunction]);

  return (
    <Container>
      {loaded ? (
        <>
          <h1>
            <FormattedMessage id="tvs.Categories" defaultMessage="Categories" />
          </h1>
          <ul>
            {sort_by_key(data.categories, language).map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/${language}/tvs/${item.slug}`}>
                    {item[language]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
