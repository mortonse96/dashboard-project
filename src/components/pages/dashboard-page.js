import React from 'react';
import styled from 'styled-components';
import Dashboard from '../dashboard/dashboard';

const DashboardPage = ({
  className,
  ...props
}) => {
  return (
    <Wrapper
      className={['DashboardPage', className].join(' ')}
      {...props}
    >
      <Dashboard />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DashboardPage;
