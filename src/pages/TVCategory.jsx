import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getTVCategory, getTVCategoryPrograms } from '../store/actions/tvs';
import { sort_by_key } from '../helpers/utils';

export const TVCategory = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id } = useParams();
  const tv_category = useSelector((state) => state.tv_category);
  const tv_category_programs = useSelector(
    (state) => state.tv_category_programs,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      (!tv_category.loading && !tv_category.loaded) ||
      !tv_category[category_id]
    )
      dispatch(getTVCategory(category_id));
  }, [dispatch, tv_category, category_id]);

  useEffect(() => {
    if (tv_category[category_id] && !tv_category_programs.loading) {
      tv_category[category_id].forEach((program) => {
        if (!tv_category_programs[program.id])
          dispatch(getTVCategoryPrograms(program.id));
      });
    }
  }, [dispatch, tv_category, tv_category_programs, category_id]);

  const [open, setOpen] = useState({});

  const toggleItem = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Container>
      <h1>
        <FormattedMessage id="tvs.Programs" defaultMessage="Programs" />
      </h1>
      {tv_category.loaded && tv_category[category_id] ? (
        <ListGroup>
          {sort_by_key(tv_category[category_id], 'title').map(
            (program, program_index) => {
              return (
                <ListGroup.Item key={program_index}>
                  {program.title} &nbsp;
                  {tv_category_programs[program.id] && (
                    <>
                      {tv_category_programs[program.id].playlist.length > 1 && (
                        <>
                          <Button
                            className="ml-5"
                            variant="outline-primary"
                            size="sm"
                            onClick={() => toggleItem(program_index)}
                            aria-controls={`collapse-item-${program_index}`}
                            aria-expanded={Boolean(open[program_index])}
                          >
                            +
                          </Button>
                          <Collapse in={Boolean(open[program_index])}>
                            <div id={`collapse-item-${program_index}`}>
                              <ListGroup>
                                {tv_category_programs.loaded &&
                                  tv_category_programs[program.id].playlist.map(
                                    (playlist_item, playlist_index) => {
                                      return (
                                        <ListGroup.Item key={playlist_index}>
                                          <Link
                                            to={`/${language}/tvs/${category_id}/${program.id}/${playlist_item.id}`}
                                          >
                                            {playlist_item.name}
                                          </Link>
                                        </ListGroup.Item>
                                      );
                                    },
                                  )}
                              </ListGroup>
                            </div>
                          </Collapse>
                        </>
                      )}
                      {tv_category_programs[program.id].playlist.length ===
                        1 && (
                        <Link
                          to={`/${language}/tvs/${category_id}/${program.id}/${
                            tv_category_programs[program.id].playlist[0].id
                          }`}
                        >
                          <FormattedMessage
                            id="tvs.Watch"
                            defaultMessage="Watch"
                          />
                        </Link>
                      )}
                    </>
                  )}
                </ListGroup.Item>
              );
            },
          )}
        </ListGroup>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
