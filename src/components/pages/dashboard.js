import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import RevenueSection from '../revenue-section/revenue-section';

const Dashboard = ({
  className,
  ...props
}) => {
  return (
    <Wrapper
      className={['Dashboard', className].join(' ')}
      {...props}
    >
      <Grid>
        <RevenueSection />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Dashboard;
