import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';

import { Link } from 'react-router-dom';
import { getRadioProgramSeason } from '../store/actions/radios';

export const RadioProgramSeason = () => {
  const { id, program_id, season_id } = useParams();

  const dispatch = useDispatch();

  const { langCode: language } = useSelector((state) => state.language);

  const season = useSelector((state) => state.radio_program_season);

  useEffect(() => {
    dispatch(getRadioProgramSeason(season_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [season_id]);

  return (
    <Container>
      {season.loaded ? (
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
          {season[season_id].chapters && (
            <ul>
              {season[season_id].chapters.map((item, index) => {
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
