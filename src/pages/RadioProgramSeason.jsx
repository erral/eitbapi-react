import { useSelector } from 'react-redux';

import { getRadioProgramSeason } from '../api';
import { useAsync } from '../hooks';
import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';

import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';

export const RadioProgramSeason = () => {
  const { id, program_id, season_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  const { langCode: language } = useSelector((state) => state.language);

  useEffect(() => {
    triggerFunction(getRadioProgramSeason, season_id);
  }, [season_id, triggerFunction]);

  return (
    <Container>
      {loaded ? (
        <>
          {/* <h1>{data.data.title}</h1>
          <p>{data.data.presenter}</p>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={data.data.image}
            />
          </Figure>
          <p>{data.data.description}</p> */}
          <h2>
            <FormattedMessage
              id="radioprogramseason.Chapters"
              defaultMessage="Chapters"
            />
          </h2>
          {data.chapters && (
            <ul>
              {data.chapters.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={`/${language}/radios/${id}/${program_id}/${season_id}/${item.id}`}
                    >
                      {item.title}
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
