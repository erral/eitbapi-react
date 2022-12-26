/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';
import { getRadioProgramSeasonChapter } from '../store/actions/radios';

import Figure from 'react-bootstrap/Figure';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

export const RadioProgramSeasonChapter = () => {
  const { chapter_id } = useParams();

  const dispatch = useDispatch();
  const chapter = useSelector((state) => state.radio_program_season_chapter);

  useEffect(() => {
    dispatch(getRadioProgramSeasonChapter(chapter_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter_id]);

  return (
    <Container>
      {chapter.loaded ? (
        <>
          <h1>{chapter[chapter_id].title}</h1>
          <p>{chapter[chapter_id].presenter}</p>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={chapter[chapter_id].image}
            />
          </Figure>
          <p>{chapter[chapter_id].description}</p>
          <p>
            <audio controls src={chapter[chapter_id].audio} />
          </p>
          <p>
            <a href={chapter[chapter_id].audio} download={true}>
              <FormattedMessage
                id="chapter.download"
                defaultMessage="Download"
              />
            </a>
          </p>
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
