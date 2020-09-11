import React from 'react';
import styled from 'styled-components';
import { Card, Col, Container, Row } from 'react-bootstrap';
import H1 from '../typography/H1';
import H3 from '../typography/H3';
import RevenueCard from '../revenue-card/revenue-card';

const Dashboard = ({
  className,
  ...props
}) => {
  return (
    <Wrapper
      className={['Dashboard', className].join(' ')}
      {...props}
    >
      <Container fluid={true}>
        <Row>
          <Col>
            <H3>
              Revenue
            </H3>
          </Col>
        </Row>
        <Row>
          <Col>
            <RevenueCard />
          </Col>
          <Col>
            <RevenueCard />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Dashboard;
