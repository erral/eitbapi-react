import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ClipLoader from 'react-spinners/ClipLoader';

import { sort_by_key, getSmallestImage } from '../helpers/utils';
import { getTVCategories, getTVCategory } from '../store/actions/tvs';
import './tvs.css';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const TVs = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const tv_categories = useSelector((state) => state.tv_categories);
  const tv_category = useSelector((state) => state.tv_category);
  const [searchTerm, setSearchTerm] = useState(new RegExp('', 'i'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (!tv_categories.loaded && !tv_categories.loading)
      dispatch(getTVCategories());
  }, [dispatch, tv_categories]);

  useEffect(() => {
    if (tv_categories?.loaded) {
      tv_categories.data &&
        tv_categories.data.forEach((cat) => {
          if (!tv_category[cat.slug]) {
            dispatch(getTVCategory(cat.slug));
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, tv_categories]);
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '6px',
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      {tv_categories.loaded ? (
        <>
          <h1>
            <FormattedMessage id="tvs.Categories" defaultMessage="Categories" />
          </h1>
          {/* <Row md={6} sm={4} xs={3}>
            {sort_by_key(tv_categories.data, language).map((item, index) => {
              return (
                <Col key={index} className="d-flex justify-content-center">
                  <Link
                    to={`/${language}/tvs/${item.slug}`}
                    className="btn btn-secondary btn-tv-category"
                  >
                    {item[language]}
                  </Link>
                </Col>
              );
            })}
          </Row> */}
          <Card className="tv-program-searchbox">
            <Card.Header>
              <FormattedMessage
                id="tvs.search"
                defaultMessage="Search for the TV program"
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
          {sort_by_key(tv_categories.data, language).map((item, index) => {
            return (
              <div key={index} className="category-container">
                {tv_category.loaded && tv_category[item.slug] ? (
                  <>
                    {sort_by_key(tv_category[item.slug], 'title').filter(
                      (program) => searchTerm.test(program.title),
                    ).length > 0 && (
                      <h2>
                        <Link to={`/${language}/tvs/${item.slug}`}>
                          {item[language]}
                        </Link>
                      </h2>
                    )}
                    {sort_by_key(tv_category[item.slug], 'title').filter(
                      (program) => searchTerm.test(program.title),
                    ).length >= settings.slidesToShow ? (
                      <Slider {...settings}>
                        {sort_by_key(tv_category[item.slug], 'title')
                          .filter((program) => searchTerm.test(program.title))
                          .map((program, program_index) => {
                            return (
                              <Col key={program_index}>
                                <Card className="tv-category-item">
                                  <Card.Img
                                    variant="top"
                                    lazy
                                    src={getSmallestImage(program.images).url}
                                  />
                                  <Card.Header className="d-lg-none d-xs-block ">
                                    {program.title}
                                  </Card.Header>
                                  <Card.Body>
                                    <Card.Title>
                                      <Link
                                        to={`/${language}/tvs/${item.slug}/${program.id}`}
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
                        {sort_by_key(tv_category[item.slug], 'title')
                          .filter((program) => searchTerm.test(program.title))
                          .map((program, program_index) => {
                            return (
                              <Col key={program_index}>
                                <Card className="tv-category-item">
                                  <Card.Img
                                    variant="top"
                                    src={getSmallestImage(program.images).url}
                                  />
                                  <Card.Header className="d-lg-none d-xs-block ">
                                    {program.title}
                                  </Card.Header>
                                  <Card.Body>
                                    <Card.Title>
                                      <Link
                                        to={`/${language}/tvs/${item.slug}/${program.id}`}
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
                  <Slider {...settings}>
                    <Col>
                      <Card className="tv-category-item">
                        <Card.Body>
                          <Card.Title>
                            <span>loading...</span>
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="tv-category-item">
                        <Card.Body>
                          <Card.Title>
                            <span>loading...</span>
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="tv-category-item">
                        <Card.Body>
                          <Card.Title>
                            <span>loading...</span>
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="tv-category-item">
                        <Card.Body>
                          <Card.Title>
                            <span>loading...</span>
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="tv-category-item">
                        <Card.Body>
                          <Card.Title>
                            <span>loading...</span>
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Slider>
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
