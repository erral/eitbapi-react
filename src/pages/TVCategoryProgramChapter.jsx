import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { FormattedMessage } from 'react-intl';
import { getTVCategoryProgram } from '../api';
import { getTVCategoryProgramChapter } from '../api';
import { sort_by_key } from '../helpers/utils';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export const TVCategoryProgramChapter = () => {
  const { langCode: language } = useSelector((state) => state.language);
  const { category_id, program_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getTVCategoryProgram, category_id, program_id);
  }, [category_id, program_id, triggerFunction]);

  return (
    <Container>
      {loaded ? (
        <>
          {sort_by_key(data.web_group, 'ORDEN').map((item, index) => {
            return (
              <Container key={index}>
                <h1>{item.NOMBRE_GROUP}</h1>
                {sort_by_key(item.web_playlist, 'ORDEN').map(
                  (program_item, program_index) => {
                    return (
                      <a
                        key={program_index}
                        href={`/${language}/tvs/${category_id}/${program_id}/${program_item.ID}`}
                      >
                        {program_item.NAME}
                      </a>
                    );
                  },
                )}
              </Container>
            );
          })}
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
