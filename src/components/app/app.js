import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { green, pink } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CreateGlobalStore from '../../modules/create-global-store';
import StoreProvider from '../../contexts/store-provider/store-provider';
import CurrentPage from '../pages/current-page';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: pink,
      type: 'dark',
    },
  });
  return useObserver(() => (
    <StoreProvider store={() => CreateGlobalStore()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          component={'main'}
          fixed
        >
          <CurrentPage />
        </Container>
      </ThemeProvider>
    </StoreProvider>
  ));
}

export default App;

