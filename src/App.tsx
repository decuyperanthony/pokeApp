import './App.css';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LOGIN_PATH, POKEMONS_PATH } from './router/constants';
import PokemonsPage from './pages/Pokemons';
import RequireAuth from './hooks/useRequireAuth';

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path={LOGIN_PATH} element={<Login />} />
            <Route
              path={POKEMONS_PATH}
              element={
                <RequireAuth>
                  <PokemonsPage />
                </RequireAuth>
              }
            />
            <Route path="*" element={<>404</>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
