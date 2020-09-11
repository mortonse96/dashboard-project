import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

const Sidebar = ({
  className,
  children,
  ...props
}) => {
  return (
    <Container
      className={['Sidebar', className].join(' ')}
      {...props}
    >
      <StyledNav
        variant={'pills'}
        defaultActiveKey={'/home'}
        className={'flex-column'}
      >
        <StyledNavLink eventKey={'link-1'}>
          Dashboard
        </StyledNavLink>
        <StyledNavLink eventKey={'link-2'}>
          Revenue
        </StyledNavLink>
        <StyledNavLink eventKey={'link-3'}>
          Expenses
        </StyledNavLink>
      </StyledNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.primaryTextColor.color};
`;

const StyledNav = styled(Nav)`
  padding-top: 30%;
`;

const StyledNavLink = styled(Nav.Link)`
  color: ${(props) => props.theme.accentColor.text};
  border-radius: 0;
  &:hover, &.active {
    color: ${(props) => props.theme.defaultPrimaryColor.text};
    border-radius: 0;
    background-color: ${(props) => props.theme.defaultPrimaryColor.color};
  }
`;

export default Sidebar;
