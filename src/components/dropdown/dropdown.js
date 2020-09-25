import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () => (
    {
      formControl: {
        margin: '8px',
        minWidth: 120,
      },
    }
  )
);
export default function Dropdown({
  id,
  label,
  items,
  value,
  setValue,
  width = 300,
}) {
  const classes = useStyles();
  if (!items[0].label) {
    items = items.map(
      (val) => ({
        label: val,
        value: val,
      })
    );
  }
  return (
    <FormControl
      variant={'outlined'}
      className={classes.formControl}
    >
      <InputLabel id={`${id}-label`}>
        {label}
      </InputLabel>
      <Select
        label={label}
        labelId={`${id}-label`}
        id={id}
        value={value ? value : ''}
        onChange={setValue}
        style={{
          width,
        }}
      >
        {items.map((item, index) =>
          (
            <MenuItem
              key={`${item.value}-${index}`}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}
