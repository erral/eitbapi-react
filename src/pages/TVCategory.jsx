import { useAsync } from '../hooks';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';
import { getTVCategory, getTVCategoryPrograms } from '../api';
import { sort_by_key } from '../helpers/utils';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

export const TVCategory = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getTVCategory, category_id);
  }, [category_id, triggerFunction]);

  const [open, setOpen] = useState({});

  const toggleItem = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const PlayList = (props) => {
    const { program_id } = props;

    const {
      triggerFunction: triggerFunctionPrograms,
      data: dataPrograms,
      loaded: loadedPrograms,
    } = useAsync();

    useEffect(() => {
      triggerFunctionPrograms(getTVCategoryPrograms, program_id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      loadedPrograms &&
      dataPrograms.playlist.map((playlist_item, playlist_index) => {
        return (
          <ListGroup.Item key={playlist_index}>
            <Link
              to={`/${language}/tvs/${category_id}/${program_id}/${playlist_item.id}`}
            >
              {playlist_item.name}
            </Link>
          </ListGroup.Item>
        );
      })
    );
  };

  return (
    <Container>
      {loaded ? (
        <>
          <h1>
            <FormattedMessage id="tvs.Programs" defaultMessage="Programs" />
          </h1>
          <ListGroup>
            {sort_by_key(data.program, 'title').map(
              (program, program_index) => {
                return (
                  <ListGroup.Item>
                    <Button
                      onClick={() => toggleItem(program_index)}
                      aria-controls={`collapse-item-${program_index}`}
                      aria-expanded={Boolean(open[program_index])}
                    >
                      {program.title}
                    </Button>
                    <Collapse in={Boolean(open[program_index])}>
                      <div id={`collapse-item-${program_index}`}>
                        <ListGroup>
                          <PlayList program_id={program.id} />
                        </ListGroup>
                      </div>
                    </Collapse>
                  </ListGroup.Item>
                );
              },
            )}
          </ListGroup>
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
