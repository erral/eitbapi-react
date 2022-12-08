import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';
import { getTVCategoryProgramPlaylist } from '../api';
import { sort_by_key } from '../helpers/utils';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const TVCategoryProgramPlaylist = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const LANGUAGE = language.toUpperCase();
  const { category_id, program_id, playlist_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(
      getTVCategoryProgramPlaylist,
      category_id,
      program_id,
      playlist_id,
    );
  }, [category_id, playlist_id, program_id, triggerFunction]);

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
            {sort_by_key(data.web_media, data.orden_field, data.orden_type).map(
              (item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={`/${language}/tvs/${category_id}/${program_id}/${playlist_id}/${item.ID}`}
                    >
                      {item[`NAME_${LANGUAGE}`]}
                    </a>
                  </li>
                );
              },
            )}
          </ul>
        </Container>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
