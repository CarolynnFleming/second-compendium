
import { Redirect } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
import Detail from './views/Characters/Detail';
import List from './views/Characters/List';


export default function App() {
  return (
    <Switch >
        <Route path="/characters/:id">
            <Detail />
        </Route>
        <Route path="/characters">
            <List />
        </Route>
        <Route path="/">
            <Redirect to="/characters" />
        </Route>
    </Switch>
  )
}
