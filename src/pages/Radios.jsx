import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getRadios } from '../store/actions/radios';

export const Radios = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const radios = useSelector((state) => state.radios);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!radios.loaded && !radios.loading) dispatch(getRadios());
  }, [dispatch, radios]);

  return (
    <Container>
      <h1>
        <FormattedMessage id="radio.Radios" defaultMessage="Radios" />
      </h1>
      {radios.loaded ? (
        <ul>
          {radios?.data?.length > 0 &&
            radios?.data.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/${language}/radios/${item.slug}`}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
