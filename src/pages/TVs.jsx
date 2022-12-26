import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getTVCategories } from '../store/actions/tvs';
import { sort_by_key } from '../helpers/utils';

export const TVs = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const tv_categories = useSelector((state) => state.tv_categories);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!tv_categories.loaded && !tv_categories.loading)
      dispatch(getTVCategories());
  }, [dispatch, tv_categories]);

  return (
    <Container>
      {tv_categories.loaded ? (
        <>
          <h1>
            <FormattedMessage id="tvs.Categories" defaultMessage="Categories" />
          </h1>
          <ul>
            {sort_by_key(tv_categories.data, language).map((item, index) => {
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
