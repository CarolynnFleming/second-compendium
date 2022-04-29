import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CharacterDetail from './views/Characters/Detail';
import CharacterList from './views/Characters/List';





export default function App() {
  return (
  <Router>
    <Switch>
      <Route path="/characters/:id">
        <Detail />
      </Route>
      <Route path="/characters">
        <List />
      </Route>
      <Route path="/">
        <p>The Codex</p>
        <Link to="/characters">View List</Link>
      </Route>
    </Switch>
  </Router>
  )
}
