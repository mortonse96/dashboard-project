import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Dropdown from '../dropdown/dropdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import productCategories from '../../models/product-categories';
import H3 from '../typography/H3';
import Button from '@material-ui/core/Button';
import NumberInput from '../text-input/number-input';
import { FormatMoney } from '../../utils/StringUtils';
import { Typography } from '@material-ui/core';

function RevenueForm({
  className,
  ...props
}) {
  const [category, setCategory] = useState();
  const [netPrice, setNetPrice] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitForm = () => {
    setFormSubmitted(true);
  };

  return (
    <Container
      className={['RevenueForm', className].join(' ')}
      {...props}
    >
      <Card>
        <CardContent>
          {!formSubmitted &&
            <form>
              <Grid container>
                <Grid
                  item
                  xs={12}
                >
                  <H3>
                    Add Revenue Entry
                  </H3>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <Dropdown
                    id={'category'}
                    label={'Category'}
                    items={productCategories}
                    value={category}
                    setValue={(e) => setCategory(e.target.value)}
                  />
                  <NumberInput
                    id={'net-price'}
                    label={'Net Price'}
                    value={netPrice}
                    setValue={(e) => setNetPrice(e.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'row-reverse'}
                  >
                    <Button
                      variant={'contained'}
                      color={'primary'}
                      onClick={submitForm}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          }
          {
            formSubmitted &&
              <Grid container>
                <Grid
                  item
                  xs={12}
                >
                  <H3>
                    Thank you!
                  </H3>
                  <p>
                    Your data has been submitted.
                  </p>
                </Grid>
                <Grid
                  item
                  xs={2}
                >
                  <Box variant={'outlined'}>
                    <Typography
                      variant={'h6'}
                    >
                      Category
                    </Typography>
                    <p>
                      {category}
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={2}
                >
                  <Box variant={'outlined'}>
                    <Typography
                      variant={'h6'}
                    >
                      Net Price
                    </Typography>
                    <p>
                      ${FormatMoney(netPrice)}
                    </p>
                  </Box>
                </Grid>
              </Grid>
          }
        </CardContent>
      </Card>
    </Container>
  );
}

const Container = styled(Box)`
  margin: 20px;
`;

export default RevenueForm;
