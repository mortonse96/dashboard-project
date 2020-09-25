import React from 'react';
import styled from 'styled-components';
import H3 from '../typography/H3';
import RevenueCard from '../revenue-card/revenue-card';
import Grid from '@material-ui/core/Grid';
import RevenueForm from '../forms/revenue-form';

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
        <Grid
          item
          xs={12}
        >
          <H3>
            Revenue
          </H3>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <RevenueCard />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <RevenueForm />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Dashboard;
