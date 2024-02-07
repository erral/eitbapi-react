import React, { useEffect, useState } from 'react';
import { Figure, Container, Row, Col, Card, Form } from 'react-bootstrap';
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
  const dispatch = useDispatch();
  const { category_id, program_id } = useParams();
  const { langCode: language } = useSelector((state) => state.language);
  const tv_category_programs = useSelector(
    (state) => state.tv_category_programs,
  );
  const playlist = useSelector((state) => state.tv_category_program_playlist);

  const [selectedPlaylist, setselectedPlaylist] = useState('');
  useEffect(() => {
    if (!tv_category_programs.loading && !tv_category_programs[program_id]) {
      dispatch(getTVCategoryPrograms(program_id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [program_id]);
  useEffect(() => {
    dispatch(getTVCategoryProgramPlaylist(selectedPlaylist));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlaylist]);

  useEffect(() => {
    if (
      !tv_category_programs.loading &&
      tv_category_programs.loaded &&
      tv_category_programs[program_id]
    ) {
      if (tv_category_programs[program_id].playlist.length === 1) {
        dispatch(
          getTVCategoryProgramPlaylist(
            tv_category_programs[program_id].playlist[0].id,
          ),
        );
      } else {
        const playlists = [...tv_category_programs[program_id].playlist];
        setselectedPlaylist(playlists.reverse()[0].id);
      }
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
                {tv_category_programs[program_id].playlist.length > 1 && (
                  <>
                    <Form.Select
                      aria-label="Default select example"
                      className="mb-3"
                      onChange={(e) => setselectedPlaylist(e.target.value)}
                    >
                      {tv_category_programs[program_id]?.playlist
                        .map((playlist_item, playlist_index) => {
                          return (
                            <option
                              key={playlist_index}
                              value={playlist_item.id}
                            >
                              {playlist_item.name}
                            </option>
                          );
                        })
                        .reverse()}
                    </Form.Select>
                    {selectedPlaylist &&
                      playlist.loaded &&
                      playlist[selectedPlaylist] && (
                        <Row md={4} xs={1}>
                          {sort_by_key(
                            playlist[selectedPlaylist].playlist,
                            'publication_date',
                            'DESC',
                          ).map((item, index) => {
                            return (
                              <Col key={index}>
                                <Card className="tv-category">
                                  <Card.Img
                                    variant="top"
                                    src={item.thumbnail_url}
                                  />
                                  <Card.Body>
                                    <Card.Title>
                                      <Link
                                        to={`/${language}/tvs/${category_id}/${program_id}/${selectedPlaylist}/${item.id}`}
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
                      )}
                  </>
                )}
                {tv_category_programs[program_id]?.playlist.length === 1 &&
                  playlist.loaded &&
                  playlist[
                    tv_category_programs[program_id]?.playlist[0].id
                  ] && (
                    <Row md={5}>
                      {sort_by_key(
                        playlist[
                          tv_category_programs[program_id]?.playlist[0].id
                        ].playlist,
                        'publication_date',
                        'DESC',
                      ).map((item, index) => {
                        return (
                          <Col key={index}>
                            <Card className="tv-category">
                              <Card.Img
                                variant="top"
                                src={item.thumbnail_url}
                              />
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
                  )}
              </>
            )}
        </Container>
      ) : (
        <ClipLoader />
      )}
    </>
  );
};
