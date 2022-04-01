import Main from './components/Main';
import Create from './components/Create';
import Edit from './components/Edit';
import Error from './components/Error';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>Favorite Authors</h1>


        <Switch>
        <Route path="/error">
            <Error />
            <Link to="/authors/new">Yes</Link> ****
            <Link to="/authors">No</Link>
          </Route>
          <Route path="/authors/update/:id">
            <Link to="/authors">Home</Link>
            <Edit />
          </Route>
          <Route exact path="/authors/new">
            <Create />
            

            <Route exact path="/authors">
              <Link to="/authors/new">Add an author</Link>
              <Main />
            </Route>

          </Route>
          {/* <Route exact path="/authors">
            <Link to="/authors/new">Add an author</Link>
            <Main />
          </Route> */}

          <Route exact path="/">
            <Redirect to="/authors" />
          </Route>
        </Switch>

      </div>
    </>
  );
}

export default App;
