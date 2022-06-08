import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import GlobalStyle from './themes/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
    <ToastContainer />
  </>,
  document.getElementById('root'),
);
