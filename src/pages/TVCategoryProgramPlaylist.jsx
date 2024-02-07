import React, { useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { sort_by_key } from '../helpers/utils';
import { getTVCategoryProgramPlaylist } from '../store/actions/tvs';

export const TVCategoryProgramPlaylist = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id, program_id, playlist_id } = useParams();

  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.tv_category_program_playlist);

  useEffect(() => {
    if (!playlist.loading && !playlist[playlist_id]) {
      dispatch(getTVCategoryProgramPlaylist(playlist_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlist_id]);
  return (
    <Container>
      {playlist.loaded && playlist[playlist_id] ? (
        <Container>
          <h1>{playlist[playlist_id].name}</h1>
          <p>{playlist[playlist_id].desc_group}</p>
          <h2>
            <FormattedMessage id="playlist.Chapter" defaultMessage="Chapter" />
          </h2>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <ul>
            {sort_by_key(
              playlist[playlist_id].playlist,
              'publication_date',
              'DESC',
            ).map((item, index) => {
              return (
                <li key={index}>
                  <FormattedDate value={item['publication_date']} /> {': '}
                  <Link
                    to={`/${language}/tvs/${category_id}/${program_id}/${playlist_id}/${item.id}`}
                  >
                    {item[`name`]}{' '}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
