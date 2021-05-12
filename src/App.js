import './App.css';
import 'materialize-css'
import { useRoutes } from './Routes';
import { Navbar } from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';

export const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const routes = useRoutes(isAuth)
  return (
    <div className="App container">

      {isAuth && <Navbar isAuth = {isAuth} />}
      {routes}

    </div>
  )
}
