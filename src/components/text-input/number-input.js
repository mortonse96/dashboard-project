import React from 'react';
import NumberFormat from 'react-number-format';
import TextInput from './text-input';

function NumberFormatCustom(props) {
  const {
    inputRef, onChange, ...other
  } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

function NumberInput({
  id,
  label,
  value = '0',
  setValue,
}) {
  return (
    <TextInput
      id={'formatted-numberformat-input'}
      label={label}
      value={value}
      setValue={setValue}
      variant={'outlined'}
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  );
}

export default NumberInput;
