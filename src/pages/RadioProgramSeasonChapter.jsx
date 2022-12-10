/* eslint-disable jsx-a11y/media-has-caption */
import { getRadioProgramSeasonChapter } from '../api';
import { useAsync } from '../hooks';
import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';

import Figure from 'react-bootstrap/Figure';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export const RadioProgramSeasonChapter = () => {
  const { id, program_id, season_id, chapter_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(
      getRadioProgramSeasonChapter,
      id,
      program_id,
      season_id,
      chapter_id,
    );
  }, [id, program_id, season_id, chapter_id, triggerFunction]);

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
          <p>
            <audio controls src={data.audio} />
          </p>
          <p>
            <Link to={data.audio} download>
              <FormattedMessage
                id="chapter.download"
                defaultMessage="Download"
              />
            </Link>
          </p>
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
