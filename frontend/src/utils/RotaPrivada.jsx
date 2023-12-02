import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function RotaPrivada({ children }) {
  const { user } = useContext(AuthContext);

  const usuario_autenticado = user.nome !== null;

  return usuario_autenticado ? children : <Navigate to='/login' />;
}

export default RotaPrivada;
