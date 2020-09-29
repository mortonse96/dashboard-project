import Grid from '@material-ui/core/Grid';
import H3 from '../typography/H3';
import RevenueCard from '../revenue-card/revenue-card';
import RevenueForm from '../forms/revenue-form';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function fetchRevenueData(setRevenueData, setLoading) {
  axios.get('http://localhost:3000/revenue/list').then(
    (resp) => {
      const { data } = resp;
      if (data) {
        setRevenueData(resp.data);
        setLoading(false);
      }
    });
}

function RevenueSection() {
  const [revenueData, setRevenueData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!revenueData) {
      fetchRevenueData(setRevenueData, setLoading);
    }
    return () => {};
  }, [revenueData]);

  const addRevenueItem = (entry) => {
    axios.post('http://localhost:3000/revenue/add', entry).then(
      (resp) => {
        const { data } = resp;
        if (data) {
          setRevenueData([...revenueData, resp.data.entry]);
        }
      });
  };

  return (
    <>
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
        <RevenueCard
          loading={loading}
          revenueData={revenueData}
        />
      </Grid>
      <Grid
        item
        xs={6}
      >
        <RevenueForm onSubmit={addRevenueItem}  />
      </Grid>
    </>
  );
}

export default RevenueSection;
