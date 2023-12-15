import { Navigate, Route } from 'react-router-dom';

export function PrivateRoute({ element, ...rest }) {
  const isAuthenticated = localStorage.getItem('token') !== null;  // Reemplaza esto con tu propia lógica de autenticación

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/" />;
}