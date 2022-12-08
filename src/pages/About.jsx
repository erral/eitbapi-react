import { getWikipediaPage } from '../api/wikipedia';
import { useAsync } from '../hooks';
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
  const { triggerFunction, data, loading, loaded } = useAsync();

  useEffect(() => {
    triggerFunction(getWikipediaPage);
  }, [triggerFunction]);

  return (
    <div>
      <h1>
        <FormattedMessage id="About page" defaultMessage="About page" />
      </h1>
      <p>
        <FormattedMessage
          id="This is about page"
          defaultMessage="This is about page"
        />
      </p>
      <h3>
        <FormattedMessage
          id="API REST request to Wikipedia"
          defaultMessage="API REST request to Wikipedia"
        />
        :
      </h3>
      {loading && !loaded && <p>Loading...</p>}
      {!loading && loaded && JSON.stringify(data)}
    </div>
  );
};

export default About;
