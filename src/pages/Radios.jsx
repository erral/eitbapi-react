import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ClipLoader from 'react-spinners/ClipLoader';

import { LoadingSlider } from '../components/LoadingSlider/LoadingSlider';
import { sort_by_key } from '../helpers/utils';
import { getRadios, getRadioPrograms } from '../store/actions/radios';
import { carousel_settings } from './utils';

export const Radios = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const radios = useSelector((state) => state.radios);
  const radio = useSelector((state) => state.radio);
  const [searchTerm, setSearchTerm] = useState(new RegExp('', 'i'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!radios.loaded && !radios.loading) dispatch(getRadios());
  }, [dispatch, radios]);

  useEffect(() => {
    if (radios?.loaded) {
      radios.data &&
        radios.data.forEach((cat) => {
          if (!radio[cat.slug]) {
            dispatch(getRadioPrograms(cat.slug));
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, radios]);

  return (
    <>
      {radios.loaded ? (
        <>
          <h1>
            <FormattedMessage id="radio.Radios" defaultMessage="Radios" />
          </h1>
          <Card className="program-searchbox">
            <Card.Header>
              <FormattedMessage
                id="radios.search"
                defaultMessage="Search for the Radio program"
              />
            </Card.Header>
            <Card.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) =>
                    setSearchTerm(new RegExp(e.target.value, 'i'))
                  }
                />
              </Form>
            </Card.Body>
          </Card>
          {sort_by_key(radios.data, language).map((item, index) => {
            return (
              <div key={index} className="category-container">
                {radio.loaded && radio[item.slug] ? (
                  <>
                    {sort_by_key(radio[item.slug].programs, 'title').filter(
                      (program) => searchTerm.test(program.title),
                    ).length > 0 && (
                      <h2>
                        <Link to={`/${language}/radios/${item.slug}`}>
                          {item.name}
                        </Link>
                      </h2>
                    )}
                    {sort_by_key(radio[item.slug].programs, 'title').filter(
                      (program) => searchTerm.test(program.title),
                    ).length >= carousel_settings.slidesToShow ? (
                      <Slider {...carousel_settings}>
                        {sort_by_key(radio[item.slug].programs, 'title')
                          .filter((program) => searchTerm.test(program.title))
                          .map((program, program_index) => {
                            return (
                              <Col key={program_index}>
                                <Card className="slider-item">
                                  <Card.Img
                                    variant="top"
                                    lazy
                                    src={program.image}
                                  />
                                  <Card.Header className="d-lg-none d-xs-block ">
                                    {program.title}
                                  </Card.Header>
                                  <Card.Body>
                                    <Card.Title>
                                      <Link
                                        to={`/${language}/radios/${item.slug}/${program.id}`}
                                      >
                                        <span>{program.title}</span>
                                      </Link>
                                    </Card.Title>
                                  </Card.Body>
                                </Card>
                              </Col>
                            );
                          })}
                      </Slider>
                    ) : (
                      <Row lg={6} md={3} sm={2} xs={2} className="slider-row">
                        {sort_by_key(radio[item.slug].programs, 'title')
                          .filter((program) => searchTerm.test(program.title))
                          .map((program, program_index) => {
                            return (
                              <Col key={program_index}>
                                <Card className="slider-item">
                                  <Card.Img variant="top" src={program.image} />
                                  <Card.Header className="d-lg-none d-xs-block ">
                                    {program.title}
                                  </Card.Header>
                                  <Card.Body>
                                    <Card.Title>
                                      <Link
                                        to={`/${language}/radios/${item.slug}/${program.id}`}
                                      >
                                        <span>{program.title}</span>
                                      </Link>{' '}
                                    </Card.Title>
                                    <Card.Text></Card.Text>
                                  </Card.Body>
                                </Card>
                              </Col>
                            );
                          })}
                      </Row>
                    )}
                  </>
                ) : (
                  <LoadingSlider carousel_settings={carousel_settings} />
                )}
              </div>
            );
          })}
        </>
      ) : (
        <ClipLoader />
      )}
    </>
  );
};
