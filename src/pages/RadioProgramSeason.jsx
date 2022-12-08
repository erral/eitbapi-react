import { getRadioProgramSeason, getRadioProgramSeasonChapters } from '../api';
import { useAsync } from '../hooks';
import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';

import Figure from 'react-bootstrap/Figure';
const RadioProgram = () => {
  const { id, program_id, season_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();
  const {
    triggerFunction: triggerFunctionChapters,
    data: dataChapters,
    loaded: loadedChapters,
  } = useAsync();

  const language = 'en';

  useEffect(() => {
    triggerFunction(getRadioProgramSeason, id, program_id, season_id);
  }, [id, program_id, season_id, triggerFunction]);

  useEffect(() => {
    triggerFunctionChapters(
      getRadioProgramSeasonChapters,
      id,
      program_id,
      season_id,
    );
  }, [id, program_id, season_id, triggerFunctionChapters]);

  return (
    <Container>
      {loaded ? (
        <>
          <h1>{data.title}</h1>
          <p>{data.presenter}</p>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={data.image}
            />
          </Figure>
          <p>{data.description}</p>
        </>
      ) : (
        <ClipLoader />
      )}

      {loadedChapters ? (
        <>
          <h2>
            <FormattedMessage
              id="radioprogramseason.Chapters"
              defaultMessage="Chapters"
            />
          </h2>
          {loadedChapters && (
            <ul>
              {dataChapters.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={`/${language}/radios/${id}/${program_id}/${season_id}/${item.id}`}
                    >
                      {item.title}
                    </a>
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

export default RadioProgram;
