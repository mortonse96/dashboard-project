import React from 'react';
import styled from 'styled-components';

const Sidebar = ({
  className,
  children,
  ...props
}) => {
  return (
    <Container
      className={['Sidebar', className].join(' ')}
      {...props}
    />
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primaryTextColor.color};
`;

export default Sidebar;
