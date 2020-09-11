import React from 'react';
import styled from 'styled-components';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import H2 from '../typography/H2';

const Header = () => {
  return (
    <HeaderContainer>
      <Row>
        <Col>
          <StyledNav>
            <Nav.Item>
              <H2>
                Dashboard
              </H2>
            </Nav.Item>
          </StyledNav>
        </Col>
      </Row>
    </HeaderContainer>
  );
};

const StyledNav = styled(Nav)`
  padding-left: 15px;
  background-color: ${(props) => props.theme.accentColor.color};
  box-shadow: 3px 3px 8px rgba(0,0,0,.15);
`;
const HeaderContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
`;

export default Header;
