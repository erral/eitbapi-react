/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';
import { getTVCategoryProgramPlaylistChapter } from '../api';
import { useAsync } from '../hooks';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const TVCategoryProgramPlaylistChapter = () => {
  const { chapter_id } = useParams();

  const { triggerFunction, data, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getTVCategoryProgramPlaylistChapter, chapter_id);
  }, [chapter_id, triggerFunction]);
  return (
    <Container>
      {loaded ? (
        <>
          <h1>{data.name}</h1>
          <p>{data.description}</p>

          {data.playlist.map((item, index) => {
            return (
              <Container key={index}>
                <p>{item.chapter_title}</p>
                <p>{item.description}</p>
                <p>{item.publication_date}</p>

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
