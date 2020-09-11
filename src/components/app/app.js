import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../models/Themes';
import Dashboard from '../pages/dashboard';

function App({ theme = Themes.Blue }) {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer fluid={'lg'}>
        <MainWrapper noGutters>
          <Col
            xs={3}
            xl={2}
          >
            <Sidebar />
          </Col>
          <Col
            xs={9}
            xl={10}
          >
            <Header />
            <Dashboard />
          </Col>
        </MainWrapper>
      </PageContainer>
    </ThemeProvider>
  );
}

const PageContainer = styled(Container)`
  min-height: 100vh;
  height: 100%;
  padding: 0;
`;

const MainWrapper = styled(Row)`
  background-color: ${(props) => props.theme.dividerColor.color};
`;

export default App;

