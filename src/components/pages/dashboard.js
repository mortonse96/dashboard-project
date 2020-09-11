import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import H3 from '../typography/H3';
import RevenueCard from '../revenue-card/revenue-card';
import ExpensesCard from '../expenses-card/expenses-card';
import ExpensesCardAdvanced from '../expenses-card/expenses-card-advanced';

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
        </Row>
        <Row>
          <Col>
            <H3>
              Expenses
            </H3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ExpensesCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <H3>
              Expenses - Advanced
            </H3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ExpensesCardAdvanced />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Dashboard;
