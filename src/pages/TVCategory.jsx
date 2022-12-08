import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';
import { getTVCategory } from '../api';
import { sort_by_key } from '../helpers/utils';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const TVCategory = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getTVCategory, category_id);
  }, [category_id, triggerFunction]);

  return (
    <Container>
      {loaded ? (
        <>
          <h1>
            <FormattedMessage id="tvs.Category" defaultMessage="Categories" />
          </h1>
          <ul>
            {sort_by_key(data.web_group, `NOMBRE_GROUP`).map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={`/${language}/tvs/${category_id}/${item.ID_WEB_GROUP}`}
                  >
                    {item[`NOMBRE_GROUP`]}
                  </a>
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
