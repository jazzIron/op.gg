import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './themes/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
