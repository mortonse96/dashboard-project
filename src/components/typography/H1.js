import React from 'react';
import styled from 'styled-components';

const H1 = ({
  className,
  children,
  ...props
}) => {
  return (
    <StyledH1
      className={['H1', className].join(' ')}
      {...props}
    >
      {children}
    </StyledH1>
  );
};

const StyledH1 = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default H1;
