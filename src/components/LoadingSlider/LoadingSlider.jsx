import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Slider from 'react-slick';

export const LoadingSlider = (props) => {
  const { carousel_settings, cardClass = 'slider-item' } = props;
  return (
    <Slider {...carousel_settings}>
      <Col>
        <Card className={cardClass}>
          <Card.Body>
            <Card.Title>
              <span>loading...</span>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className={cardClass}>
          <Card.Body>
            <Card.Title>
              <span>loading...</span>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className={cardClass}>
          <Card.Body>
            <Card.Title>
              <span>loading...</span>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className={cardClass}>
          <Card.Body>
            <Card.Title>
              <span>loading...</span>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className={cardClass}>
          <Card.Body>
            <Card.Title>
              <span>loading...</span>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Slider>
  );
};
