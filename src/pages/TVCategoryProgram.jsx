import React, { useEffect } from 'react';
import { Figure } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { sort_by_key } from '../helpers/utils';
import { getTVCategoryPrograms } from '../store/actions/tvs';

export const TVCategoryProgram = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id, program_id } = useParams();

  const dispatch = useDispatch();

  const tv_category_programs = useSelector(
    (state) => state.tv_category_programs,
  );
  useEffect(() => {
    if (!tv_category_programs.loading && !tv_category_programs.loaded) {
      dispatch(getTVCategoryPrograms(program_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [program_id]);

  const getSmallestImage = (images) => {
    return sort_by_key(images, 'width').slice(0, 1)[0];
  };

  return (
    <Container>
      {tv_category_programs.loaded ? (
        <Container>
          <h1>{tv_category_programs[program_id].title}</h1>
          <p>{tv_category_programs[program_id].description}</p>
          <Figure>
            <Figure.Image
              src={
                getSmallestImage(tv_category_programs[program_id].images).url
              }
            />
          </Figure>
          <h2>
            <FormattedMessage id="tvs.Playlists" defaultMessage="Playlists" />
          </h2>

          {tv_category_programs.loaded &&
            sort_by_key(
              tv_category_programs[program_id]?.playlist,
              'publication_date',
            ).map((playlist_item, playlist_index) => {
              return (
                <ListGroup.Item key={playlist_index}>
                  <Link
                    to={`/${language}/tvs/${category_id}/${program_id}/${playlist_item.id}`}
                  >
                    {playlist_item.name}
                  </Link>
                </ListGroup.Item>
              );
            })}
        </Container>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
