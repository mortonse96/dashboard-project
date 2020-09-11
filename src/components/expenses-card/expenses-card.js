import React from 'react';
import styled from 'styled-components';
import { Card, Table } from 'react-bootstrap';

const ExpensesCard = ({
  className,
  ...props
}) => {
  return (
    <Container
      className={['ExpensesCard', className].join(' ')}
      {...props}
    >
      <Card>
        <Card.Header>
          Expenses
        </Card.Header>
        <Card.Body>
          <Table
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th>Department</th>
                <th>Net</th>
                <th>Taxes</th>
                <th>Overhead</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Marketing
                </td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
              </tr>
              <tr>
                <td>
                  Sales
                </td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
              </tr>
              <tr>
                <td>
                  Executive
                </td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
              </tr>
              <tr>
                <td>
                  Product
                </td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
              </tr>
              <tr>
                <td>
                  Support
                </td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

const Container = styled.div``;

export default ExpensesCard;
