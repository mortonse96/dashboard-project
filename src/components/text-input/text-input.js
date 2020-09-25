import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

function TextInput({
  id,
  label,
  value,
  setValue,
  className,
  ...props
}) {
  return (
    <StyledTextField
      id={id}
      label={label}
      value={value}
      onChange={setValue}
      variant={'outlined'}
      {...props}
    />
  );
}

const StyledTextField = styled(TextField)`
  margin: 8px;
`;

export default TextInput;
