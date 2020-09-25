import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Dropdown from '../dropdown/dropdown';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import RevenueTableRow from './revenue-table-row';
import axios from 'axios';
import H3 from '../typography/H3';
import Box from '@material-ui/core/Box';

const RevenueCard = ({
  className,
  ...props
}) => {
  const [timeIntervalSelection, setTimeIntervalSelection] = useState('daily');
  const [categorySelection, setCategorySelection] = useState('all');
  const [tableData, setTableData] = useState();
  const loadedRef = useRef(false);

  const timeIntervalOptions = [
    {
      label: 'Daily',
      value: 'daily',
    },
    {
      label: 'Weekly',
      value: 'weekly',
    },
    {
      label: 'Monthly',
      value: 'monthly',
    },
  ];

  const categoryOptions = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Printers',
      value: 'printers',
    },
    {
      label: 'Services',
      value: 'services',
    },
    {
      label: 'Miscellaneous',
      value: 'miscellaneous',
    },
    {
      label: 'Ink',
      value: 'ink',
    },
    {
      label: 'Accessories',
      value: 'accessories',
    },
  ];

  useEffect(() => {
    if (!loadedRef.current) {
      axios.get('http://localhost:3000/revenue/list').then(
        (resp) => {
          const { data } = resp;
          if (data) {
            setTableData(resp.data);
          }
        });
      loadedRef.current = true;
    }
    return () => {};
  });

  return (
    <RevenueCardContainer
      className={['RevenueCard', className].join(' ')}
      {...props}
    >
      <Card>
        <CardContent>
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
              <Dropdown
                id={'select-time-period'}
                label={'Interval'}
                items={timeIntervalOptions}
                value={timeIntervalSelection}
                setValue={(e) => setTimeIntervalSelection(e.target.value)}
              />
              <Dropdown
                id={'select-category'}
                label={'Category'}
                items={categoryOptions}
                value={categorySelection}
                setValue={(e) => setCategorySelection(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TableContainer component={Paper}>
                <Table
                  stickyHeader
                  size={'small'}
                  style={{
                    marginTop: '20px',
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align={'left'}>Product</TableCell>
                      <TableCell align={'right'}>Net</TableCell>
                      <TableCell align={'right'}>Taxes</TableCell>
                      <TableCell align={'right'}>Overhead</TableCell>
                      <TableCell align={'right'}>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      tableData ?
                        tableData.map(
                          (item, index) => (
                            <RevenueTableRow
                              key={`revenue-table-row-${index}`}
                              colSpan={5}
                              {...item}
                            />
                          )
                        )
                        :
                        <TableRow>
                          <TableCell>
                            Loading...
                          </TableCell>
                        </TableRow>
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </RevenueCardContainer>
  );
};

const RevenueCardContainer = styled(Box)`
  margin: 20px;
`;

export default RevenueCard;
