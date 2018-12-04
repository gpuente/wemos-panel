import 'I18n';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './utils/registerServiceWorker';
import App from './views/App';

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <App />,
  rootElement
);

registerServiceWorker();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./views/App.tsx', () => {
    const NextApp = require('./views/App').default
    ReactDOM.render(
      <NextApp />,
      rootElement
    )
  })
}
