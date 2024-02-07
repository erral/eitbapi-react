/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';

import { getTVCategoryProgramPlaylistChapter } from '../store/actions/tvs';

export const TVCategoryProgramPlaylistChapter = () => {
  const { chapter_id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.tv_category_program_playlist_chapter,
  );

  useEffect(() => {
    if (!data.loading && !data[chapter_id]) {
      dispatch(getTVCategoryProgramPlaylistChapter(chapter_id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter_id]);
  return (
    <Container>
      {data.loaded ? (
        <>
          <h1>{data[chapter_id].name}</h1>
          <p>{data[chapter_id].description}</p>

          {data[chapter_id].playlist.map((item, index) => {
            return (
              <Container key={index}>
                <h2>
                  {item.chapter_title} (
                  <FormattedDate value={item['publication_date']} />)
                </h2>
                <p>{item.description}</p>
                <Tabs
                  className="mb-3"
                  id="playlist-items"
                  defaultActiveKey={'0-0'}
                >
                  {item.videos.map((video_item, video_index) => {
                    return (
                      <Tab
                        title={`${video_item.width} x ${video_item.height}`}
                        eventKey={`${index}-${video_index}`}
                        key={`${index}-${video_index}`}
                      >
                        <h2>
                          {video_item.width} x {video_item.height}
                        </h2>
                        <video width={'100%'} controls>
                          <source src={video_item.url} />
                        </video>
                        <br />
                        <a href={video_item.url} download={true}>
                          <FormattedMessage
                            id="chapter.download"
                            defaultMessage="Download"
                          />
                        </a>
                      </Tab>
                    );
                  })}
                </Tabs>
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
