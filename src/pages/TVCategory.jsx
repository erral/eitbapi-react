import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { sort_by_key, getSmallestImage } from '../helpers/utils';
import { getTVCategory } from '../store/actions/tvs';

export const TVCategory = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id } = useParams();
  const tv_category = useSelector((state) => state.tv_category);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      (!tv_category.loading && !tv_category.loaded) ||
      !tv_category[category_id]
    )
      dispatch(getTVCategory(category_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category_id]);

  return (
    <Container>
      <h1>
        <FormattedMessage id="tvs.Programs" defaultMessage="Programs" />
      </h1>
      {tv_category.loaded && tv_category[category_id] ? (
        <Row lg={3} md={3} sm={3} xs={2}>
          {sort_by_key(tv_category[category_id], 'title').map(
            (program, program_index) => {
              return (
                <Col key={program_index}>
                  <Card className="tv-category">
                    <Card.Img
                      variant="top"
                      src={getSmallestImage(program.images).url}
                    />
                    <Card.Body>
                      <Card.Title>
                        <Link
                          to={`/${language}/tvs/${category_id}/${program.id}`}
                        >
                          {program.title}
                        </Link>{' '}
                      </Card.Title>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            },
          )}
        </Row>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
