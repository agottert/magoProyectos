import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { agregarUsuario, borrarUsuario } from './actions';

let store = createStore(appReducer)

store.dispatch(
  agregarUsuario("Jose", "Perez", "jperez@mail.com", "jperez", "1/1/1981")
);
store.dispatch(
  agregarUsuario("Jose", "Gomez", "jgomez@mail.com", "jgomez", "1/1/1991")
);
store.dispatch(
  borrarUsuario("jperez@mail.com")
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)// el componente App, y donde se renderea

registerServiceWorker();
