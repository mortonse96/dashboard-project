import React from 'react';
import styled from 'styled-components';
import { Card, Table } from 'react-bootstrap';
import ProductRow from './product-row';

const RevenueCard = ({
  className,
  ...props
}) => {
  const printers = {
    Net: '$100.00',
    Overhead: '$60.00',
    Product: 'Printers',
    Taxes: '$40.00',
    Total: '$120.00',
  };

  const ink = {
    Net: '$300.00',
    Overhead: '$80.00',
    Product: 'Ink',
    Taxes: '$10.00',
    Total: '$30.00',
  };

  const services = {
    Net: '$430.00',
    Overhead: '$73.00',
    Product: 'Services',
    Taxes: '$43.00',
    Total: '$500.00',
  };

  const accessories = {
    Net: '$43.00',
    Overhead: '$73.00',
    Product: 'Accessories',
    Taxes: '$22.00',
    Total: '$67.00',
  };

  const miscellaneous = {
    Net: '$50.00',
    Overhead: '$56.00',
    Product: 'Miscellaneous',
    Taxes: '$12.00',
    Total: '$23.00',
  };

  return (
    <Container
      className={['RevenueCard', className].join(' ')}
      {...props}
    >
      <Card>
        <Card.Header>
          Revenue
        </Card.Header>
        <Card.Body>
          <Table
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th>Product</th>
                <th>Net</th>
                <th>Taxes</th>
                <th>Overhead</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <ProductRow product={printers} />
              <ProductRow product={ink} />
              <ProductRow product={services} />
              <ProductRow product={accessories} />
              <ProductRow product={miscellaneous} />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

const Container = styled.div``;

export default RevenueCard;
