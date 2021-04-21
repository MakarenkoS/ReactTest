import './App.css';
import 'materialize-css'
import { useRoutes } from './Routes';
import { Navbar } from './components/Navbar/Navbar';
import { connect } from 'react-redux';

let App = ({ isAuth }) => {
  const routes = useRoutes(isAuth)
  return (
    <div className="App container">

      {isAuth && <Navbar />}
      {routes}

    </div>
  )
}


let mapStateToProps = state => {
  return (
    {
      isAuth: state.isAuth
    }
  )
}


export default App = connect(mapStateToProps)(App)
