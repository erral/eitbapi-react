import React, { useEffect } from 'react';
import { Figure, Container, ListGroup, Row, Col, Card } from 'react-bootstrap';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { sort_by_key, getSmallestImage } from '../helpers/utils';
import {
  getTVCategoryPrograms,
  getTVCategoryProgramPlaylist,
} from '../store/actions/tvs';
import './tvcategoryprogram.css';

export const TVCategoryProgram = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id, program_id } = useParams();

  const dispatch = useDispatch();

  const tv_category_programs = useSelector(
    (state) => state.tv_category_programs,
  );

  const playlist = useSelector((state) => state.tv_category_program_playlist);

  useEffect(() => {
    if (!tv_category_programs.loading && !tv_category_programs[program_id]) {
      dispatch(getTVCategoryPrograms(program_id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [program_id]);

  useEffect(() => {
    if (
      !tv_category_programs.loading &&
      tv_category_programs.loaded &&
      tv_category_programs[program_id] &&
      tv_category_programs[program_id].playlist.length === 1
    ) {
      dispatch(
        getTVCategoryProgramPlaylist(
          tv_category_programs[program_id].playlist[0].id,
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tv_category_programs[program_id]]);

  return (
    <>
      {tv_category_programs.loaded && tv_category_programs[program_id] ? (
        <Container>
          <Row xs={1} md={2} className="program-presentation">
            <Col>
              <h1>{tv_category_programs[program_id].title}</h1>
              <p>{tv_category_programs[program_id].description}</p>
            </Col>
            <Col>
              <Figure className="program-featured-image">
                <Figure.Image
                  src={
                    getSmallestImage(tv_category_programs[program_id].images)
                      .url
                  }
                />
              </Figure>
            </Col>
          </Row>
          {tv_category_programs[program_id]?.playlist.length > 1 ? (
            <h2>
              <FormattedMessage id="tvs.Playlists" defaultMessage="Playlists" />
            </h2>
          ) : (
            <h2>
              <FormattedMessage
                id="playlist.Chapter"
                defaultMessage="Chapter"
              />
            </h2>
          )}
          {tv_category_programs.loaded &&
            tv_category_programs[program_id] !== undefined &&
            tv_category_programs[program_id].playlist && (
              <>
                {tv_category_programs[program_id].playlist.length > 1 &&
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
                <Row md={5}>
                  {tv_category_programs[program_id]?.playlist.length === 1 &&
                    playlist.loaded &&
                    playlist[
                      tv_category_programs[program_id]?.playlist[0].id
                    ] &&
                    sort_by_key(
                      playlist[tv_category_programs[program_id]?.playlist[0].id]
                        .playlist,
                      'publication_date',
                      'DESC',
                    ).map((item, index) => {
                      return (
                        <Col key={index}>
                          <Card className="tv-category">
                            <Card.Img variant="top" src={item.thumbnail_url} />
                            <Card.Body>
                              <Card.Title>
                                <Link
                                  to={`/${language}/tvs/${category_id}/${program_id}/${tv_category_programs[program_id]?.playlist[0].id}/${item.id}`}
                                >
                                  {item[`name`]}
                                </Link>{' '}
                              </Card.Title>
                              <Card.Subtitle>
                                <FormattedDate
                                  value={item['publication_date']}
                                />
                              </Card.Subtitle>
                              <Card.Text></Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </>
            )}
        </Container>
      ) : (
        <ClipLoader />
      )}
    </>
  );
};
