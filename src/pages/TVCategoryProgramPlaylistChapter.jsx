/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';

import { program_language } from '../helpers/utils';
import { getTVCategoryProgramPlaylistChapter } from '../store/actions/tvs';

export const TVCategoryProgramPlaylistChapter = () => {
  const { chapter_id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.tv_category_program_playlist_chapter,
  );

  useEffect(() => {
    if (!data.loading && !data.loaded) {
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
          <p>
            <FormattedMessage
              id="tv.chapter.language"
              defaultMessage="Language:"
            />{' '}
            {program_language(data[chapter_id].language)}
          </p>

          {data[chapter_id].playlist.map((item, index) => {
            return (
              <Container key={index}>
                <p>{item.chapter_title}</p>
                <p>{item.description}</p>
                <p>
                  <FormattedMessage
                    id="tv.chapter.chapterdate"
                    defaultMessage="Chapter date:"
                  />{' '}
                  <FormattedDate value={item['publication_date']} />
                </p>

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
                        <video
                          width={video_item.width}
                          height={video_item.height}
                          controls
                        >
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
