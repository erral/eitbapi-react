/* eslint-disable jsx-a11y/media-has-caption */
import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ClipLoader from 'react-spinners/ClipLoader';
import { getTVCategoryProgramPlaylistChapter } from '../api';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Figure from 'react-bootstrap/Figure';
import { FormattedMessage } from 'react-intl';

export const TVCategoryProgramPlaylistChapter = () => {
  const { category_id, program_id, playlist_id, chapter_id } = useParams();

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
          <h1>{data.name}</h1>
          <p>{data.desc_group}</p>
          <p>{data.desc_playlist}</p>
          {data.web_media.map((item, index) => {
            return (
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
                      <a href={video_item.PMD_URL} download>
                        <FormattedMessage
                          id="chapter.download"
                          defaultMessage="Download"
                        />
                      </a>
                    </Container>
                  );
                })}
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
