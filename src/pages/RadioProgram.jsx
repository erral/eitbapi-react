import { getRadioProgramData, getRadioProgramSeasons } from '../api';
import { useAsync } from '../hooks';
import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Figure from 'react-bootstrap/Figure';

export const RadioProgram = () => {
  const { id, program_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();
  const {
    triggerFunction: triggerFunctionSeasons,
    data: dataSeasons,
    loaded: loadedSeasons,
  } = useAsync();

  const { langCode: language } = useSelector((state) => state.language);

  useEffect(() => {
    triggerFunction(getRadioProgramData, program_id);
  }, [program_id, triggerFunction]);

  useEffect(() => {
    triggerFunctionSeasons(getRadioProgramSeasons, program_id);
  }, [program_id, triggerFunctionSeasons]);

  return (
    <Container>
      {loaded ? (
        <>
          <h1>{data.data.title}</h1>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={data.data.image}
            />
          </Figure>
          <p>{data.data.description}</p>
        </>
      ) : (
        <ClipLoader />
      )}

      {loadedSeasons ? (
        <>
          <h2>
            <FormattedMessage
              id="radioprogram.Seasons"
              defaultMessage="Seasons"
            />
          </h2>
          {loadedSeasons && (
            <ul>
              {dataSeasons.seasons.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={`/${language}/radios/${id}/${program_id}/${item.id}`}
                    >
                      {item.title} ({item.presenter})
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
