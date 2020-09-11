import React from 'react';
import styled from 'styled-components';
import { Card, Table } from 'react-bootstrap';

const ExpensesCardAdvanced = ({
  className,
  ...props
}) => {
  const departments = [
    {
      Name: 'Marketing',
      Net: '$1,340',
      Overhead: '$65',
      Taxes: '$1050',
      Total: '$935',
    },
    {
      Name: 'Sales',
      Net: '$3,340',
      Overhead: '$250',
      Taxes: '$840',
      Total: '$535',
    },
    {
      Name: 'Executive',
      Net: '$1,340',
      Overhead: '$145',
      Taxes: '$276',
      Total: '$2,335',
    },
    {
      Name: 'Product',
      Net: '$1,340',
      Overhead: '$168',
      Taxes: '$358',
      Total: '$4,680',
    },
    {
      Name: 'Support',
      Net: '$3,340',
      Overhead: '$45',
      Taxes: '$623',
      Total: '$184',
    },
  ];

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
                {departments.map(
                  (department) => <th>{department.Name}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {
                departments.map(
                  (department) => (
                    <tr>
                      <td>{department.Name}</td>
                      <td>{department.Net}</td>
                      <td>{department.Overhead}</td>
                      <td>{department.Taxes}</td>
                      <td>{department.Total}</td>
                    </tr>
                  )
                )
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

const Container = styled.div``;

export default ExpensesCardAdvanced;
