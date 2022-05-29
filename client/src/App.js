import React from 'react'; 
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from "./hooks/auth.hook"
import { AuthContext } from './context/AuthContext';
import {Navbar} from "./components/Navbar";
import 'materialize-css'

/*function App() {
    const {token, login, logout, userId} = useAuth()
    const routes = useRoutes(false)
    return (        
            <Router>
                <div className="container">
                    {routes}
                </div>
            </Router>        
    )
}*/
function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth)
  return (
      <AuthContext.Provider value={{
          token, login, logout, userId, isAuth
      }}>
      <Router>
          { isAuth && <Navbar></Navbar>}
          <div className="container">
              {routes}
          </div>
      </Router>
      </AuthContext.Provider>
  )
}

export default App
