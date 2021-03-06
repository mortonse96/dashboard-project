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
  onSubmit = () => {},
  ...props
}) {
  const [category, setCategory] = useState();
  const [netPrice, setNetPrice] = useState(null);
  const [taxes, setTaxes] = useState(null);
  const [overhead, setOverhead] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  function submitForm() {
    /**
     * Object must look like this:
     * {
     * category,
     * net,
     * overhead,
     * taxes
     * }
     */
    const item = {
      category,
      net: netPrice,
      overhead,
      taxes,
    };
    onSubmit(item);
    setFormSubmitted(true);
  }
  function resetForm() {
    setCategory(null);
    setNetPrice(null);
    setTaxes(null);
    setFormSubmitted(false);
  }
  return (
    <Container
      className={['RevenueForm', className].join(' ')}
      {...props}
    >
      <Card>
        <CardContent>
          <form>
            <Grid container>
              {!formSubmitted &&
                <>
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
                    <NumberInput
                      id={'taxes'}
                      label={'Taxes'}
                      value={taxes}
                      setValue={(e) => setTaxes(e.target.value)}
                    />
                    <NumberInput
                      id={'overhead'}
                      label={'Overhead'}
                      value={overhead}
                      setValue={(e) => setOverhead(e.target.value)}
                    />
                  </Grid>
                </>
              }
              {
                formSubmitted &&
                  <>
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
                      <Box>
                        <Typography
                          variant={'h6'}
                        >
                          Category
                        </Typography>
                        <p>
                          {category}
                        </p>
                      </Box>
                      <Box>
                        <Typography
                          variant={'h6'}
                        >
                          Net Price
                        </Typography>
                        <p>
                          ${FormatMoney(netPrice)}
                        </p>
                      </Box>
                      <Box>
                        <Typography
                          variant={'h6'}
                        >
                          Taxes
                        </Typography>
                        <p>
                          ${FormatMoney(taxes)}
                        </p>
                      </Box>
                      <Box>
                        <Typography
                          variant={'h6'}
                        >
                          Overhead
                        </Typography>
                        <p>
                          ${FormatMoney(overhead)}
                        </p>
                      </Box>
                    </Grid>
                  </>
              }
              <Grid
                item
                xs={12}
              >
                <Box
                  display={'flex'}
                  flexDirection={'row-reverse'}
                >
                  {
                    formSubmitted ?
                      (
                        <Button

                          variant={'contained'}
                          color={'primary'}
                          onClick={resetForm}
                        >
                          Add Another
                        </Button>
                      )
                      :
                      (
                        <Button

                          variant={'contained'}
                          color={'primary'}
                          onClick={submitForm}
                        >
                          Submit
                        </Button>
                      )
                  }
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

const Container = styled(Box)`
  margin: 20px;
`;

export default RevenueForm;
