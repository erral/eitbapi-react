import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getRadioPrograms } from '../store/actions/radios';
import { sort_by_key } from '../helpers/utils';

export const Radio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const radio = useSelector((state) => state.radio);

  const { langCode: language } = useSelector((state) => state.language);
  useEffect(() => {
    if ((!radio.loading && !radio.loaded) || !radio[id])
      dispatch(getRadioPrograms(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container>
      <h2>
        <FormattedMessage id="radio.Programs" defaultMessage="Programs" />
      </h2>
      {radio.loaded && radio[id] ? (
        <ul>
          {sort_by_key(radio[id].programs, 'title').map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/${language}/radios/${id}/${item.id}`}>
                  {item.title}
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
