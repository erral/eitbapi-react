import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
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
    if (!playlist.loading && !playlist.loaded) {
      dispatch(getTVCategoryProgramPlaylist(playlist_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlist_id]);
  return (
    <Container>
      {playlist.loaded ? (
        <Container>
          <h1>{playlist[playlist_id].name}</h1>
          <p>{playlist[playlist_id].desc_group}</p>
          <h2>
            <FormattedMessage id="playlist.Chapter" defaultMessage="Chapter" />
          </h2>
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
