import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  getRadioProgramData,
  getRadioProgramSeasons,
} from '../store/actions/radios';

export const RadioProgram = () => {
  const { id, program_id } = useParams();

  const dispatch = useDispatch();
  const program = useSelector((state) => state.radio_program_data);
  const seasons = useSelector((state) => state.radio_program_seasons);

  const { langCode: language } = useSelector((state) => state.language);

  useEffect(() => {
    if ((!program.loading && !program.loaded) || !program[program_id])
      dispatch(getRadioProgramData(program_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if ((!seasons.loading && !seasons.loaded) || !seasons[program_id])
      dispatch(getRadioProgramSeasons(program_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container>
      {program.loaded ? (
        <>
          <h1>{program[program_id].data.title}</h1>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={program[program_id].data.image}
            />
          </Figure>
          <p>{program[program_id].data.description}</p>
        </>
      ) : (
        <ClipLoader />
      )}

      {seasons.loaded ? (
        <>
          <h2>
            <FormattedMessage
              id="radioprogram.Seasons"
              defaultMessage="Seasons"
            />
          </h2>
          <ul>
            {seasons[program_id].seasons.map((item, index) => {
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
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
