import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/sign-in" replace />;
}



// import { useSelector } from 'react-redux';
// import { Outlet, Navigate } from 'react-router-dom';

// export default function PrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
// }
