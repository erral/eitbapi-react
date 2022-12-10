/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';
import { getTVCategoryProgramPlaylistChapter } from '../api';
import { useAsync } from '../hooks';

export const TVCategoryProgramPlaylistChapter = () => {
  const { category_id, program_id, playlist_id, chapter_id } = useParams();
  const { langCode: language } = useSelector((state) => state.language);
  const LANGUAGE = language.toUpperCase();
  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(
      getTVCategoryProgramPlaylistChapter,
      category_id,
      program_id,
      playlist_id,
      chapter_id,
    );
  }, [category_id, chapter_id, playlist_id, program_id, triggerFunction]);

  return (
    <Container>
      {loaded ? (
        <>
          {data.web_media.map((item, index) => {
            return (
              <>
                <h1>{item[`NAME_${LANGUAGE}`]}</h1>
                <Container>
                  <Figure>
                    <Figure.Image
                      width={640}
                      height={360}
                      alt="171x180"
                      src={item.THUMBNAIL_URL}
                    />
                  </Figure>
                  {item.RENDITIONS.map((video_item, video_index) => {
                    return (
                      <Container key={video_index}>
                        <h2>
                          {video_item.FRAME_WIDTH} x {video_item.FRAME_HEIGHT}
                        </h2>
                        <video
                          width={video_item.FRAME_WIDTH}
                          height={video_item.FRAME_HEIGHT}
                          controls
                        >
                          <source src={video_item.PMD_URL} />
                        </video>
                        <br />
                        <a href={video_item.PMD_URL} download={true}>
                          <FormattedMessage
                            id="chapter.download"
                            defaultMessage="Download"
                          />
                        </a>
                      </Container>
                    );
                  })}
                </Container>
              </>
            );
          })}
        </>
      ) : (
        <ClipLoader />
      )}
    </Container>
  );
};
