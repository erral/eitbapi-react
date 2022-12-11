import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { getTVCategoryProgramPlaylist } from '../api';
import { sort_by_key } from '../helpers/utils';
import { useAsync } from '../hooks';

export const TVCategoryProgramPlaylist = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const LANGUAGE = language.toUpperCase();
  const { category_id, program_id, playlist_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getTVCategoryProgramPlaylist, playlist_id);
  }, [playlist_id, triggerFunction]);
  console.log(data);
  return (
    <Container>
      {loaded ? (
        <Container>
          <h1>{data.name}</h1>
          <p>{data.desc_group}</p>
          <h2>
            <FormattedMessage id="playlist.Chapter" defaultMessage="Chapter" />
          </h2>
          <ul>
            {sort_by_key(data.playlist, 'name').map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={`/${language}/tvs/${category_id}/${program_id}/${playlist_id}/${item.id}`}
                  >
                    {item[`name`]}
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
