import React from 'react';
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';

export const Home = () => {
  return (
    <Container>
      <h1>
        <FormattedMessage
          id="home.title"
          defaultMessage="EITB Nahieran alternatiboa"
        />
      </h1>
      <p>
        <FormattedMessage
          id="home.welcome"
          defaultMessage={
            'Kaixo EITB Nahieran alternatiboa da hau. Azkenaldian ikasi dudan JS eta React apurrarekin egindakoa.'
          }
        />
      </p>
      <p>
        <FormattedMessage
          id="home.useMenu"
          defaultMessage={
            'Erabili goiko menua irrati zein telebista programak ikusi eta bilatzeko'
          }
        />
      </p>
      <p>
        <FormattedMessage
          id="home.APIComingSoon"
          defaultMessage="Laster APIa zuen eskura!"
        />
      </p>
    </Container>
  );
};
