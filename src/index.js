import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store/store';
import { Provider } from 'react-redux';
import "./index.css"

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

