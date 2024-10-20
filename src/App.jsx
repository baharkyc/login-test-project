import { Route, Switch } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.jsx';


function App() {
  

  return (
    <>
    <Switch>
      <Route exact path={'/'}>
        <Login/>
      </Route>
      <Route  path={'/login'}>
        <Login/>
      </Route>
      <Route path={'/success'}>

      </Route>
    </Switch>
      
    </>
  )
}

export default App
