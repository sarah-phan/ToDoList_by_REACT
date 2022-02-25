import './App.css';
import { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { renderRoutesHome } from './routes';
import { createBrowserHistory } from 'history';
import PageNotFound from './containers/PageNotFound';

const history = createBrowserHistory()

function App() {
  return (
    // <Home/>
    <Suspense history = {history} fallback>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          <Route path="" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
