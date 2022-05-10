
import { Link, Route, Switch} from 'react-router-dom';
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
            <h1>Home</h1>
            <Link to="/characters"><h1>View the Benders</h1></Link>
        </Route>
    </Switch>
  )
}
