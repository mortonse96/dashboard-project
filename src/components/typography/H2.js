import React from 'react';
import styled from 'styled-components';

const H2 = ({
  className,
  children,
  ...props
}) => {
  return (
    <StyledH2
      className={['H2', className].join(' ')}
      {...props}
    >
      {children}
    </StyledH2>
  );
};

const StyledH2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default H2;
