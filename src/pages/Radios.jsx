import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getRadios } from '../store/actions/radios';

export const Radios = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const radios = useSelector((state) => state.radios);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!radios.loaded && !radios.loading) dispatch(getRadios());
  }, [dispatch, radios]);

  return (
    <>
      <h1>
        <FormattedMessage id="radio.Radios" defaultMessage="Radios" />
      </h1>
      {radios.loaded ? (
        <Row lg={4} md={3} sm={3} xs={2}>
          {radios?.data?.length > 0 &&
            radios?.data.map((item, index) => {
              return (
                <Col key={index}>
                  <Card className="tv-category">
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        <Link to={`/${language}/radios/${item.slug}`}>
                          <FormattedMessage
                            id="See more"
                            defaultMessage="See more"
                          />
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      ) : (
        <ClipLoader />
      )}
    </>
  );
};
