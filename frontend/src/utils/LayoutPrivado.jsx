import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function LayoutPrivado({ children }) {
  const { user } = useContext(AuthContext);

  const usuario_autenticado = user.nome !== null;

  return usuario_autenticado ? children : null;
}

export default LayoutPrivado;
