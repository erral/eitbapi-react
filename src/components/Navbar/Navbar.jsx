import React from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { ROUTES } from '../../config';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { langCode } = useSelector((state) => state.language);
  return (
    <BootstrapNavbar expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          EITB Nahieran (alternatiboa)
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <FormattedMessage id="Home" defaultMessage="Home" />
            </Nav.Link>
            <Nav.Link as={Link} to={`${ROUTES?.RADIOS.paths[langCode]}`}>
              <FormattedMessage id="Radios" defaultMessage="Radios" />
            </Nav.Link>
          </Nav>
          <Nav>
            <LanguageSelector />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
export default Navbar;
