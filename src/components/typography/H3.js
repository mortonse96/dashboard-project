import React from 'react';
import styled from 'styled-components';

const H3 = ({
  className,
  children,
  ...props
}) => {
  return (
    <StyledH3
      className={['H3', className].join(' ')}
      {...props}
    >
      {children}
    </StyledH3>
  );
};

const StyledH3 = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default H3;
