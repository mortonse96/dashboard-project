import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const RevenueCard = ({
  className,
  ...props
}) => {
  return (
    <Container
      className={['RevenueCard', className].join(' ')}
      {...props}
    >
      <Card>
        <Card.Header>
          Title
        </Card.Header>
        <Card.Body>
          Lorem ipsum
        </Card.Body>
      </Card>
    </Container>
  );
};

const Container = styled.div``;

export default RevenueCard;
