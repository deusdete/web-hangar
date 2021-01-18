import Context from './utils/context'
import { isAuthenticated, login, register, getUser } from './auth'

import Routes from './routes';

function App() {

  return (
    <Context.Provider value={{
      isAuthenticated: () => isAuthenticated(),
      login: (email, password) => login(email, password),
      register: (username, email, password) => register(username, email, password),
      getUser: () => getUser()
    }}>
       <Routes/>
    </Context.Provider>
  );
}

export default App;
