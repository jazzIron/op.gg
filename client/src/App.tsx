import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { RouterManager } from './routes/RouterManager';
import { theme } from './themes';
import ErrorBoundary from './routes/ErrorBoundary';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <RecoilRoot>
          <RouterManager />
        </RecoilRoot>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
