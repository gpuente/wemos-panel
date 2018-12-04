import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';

class App extends React.Component {
  public render() {
    return (
      <main>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact={true} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
