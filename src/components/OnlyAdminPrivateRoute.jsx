import { Outlet, Navigate } from 'react-router-dom';

export default function OnlyAdminPrivateRoute() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return token && role === 'admin' ? <Outlet /> : <Navigate to="/sign-in" replace />;
}





// import { useSelector } from 'react-redux';
// import { Outlet, Navigate } from 'react-router-dom';

// export default function OnlyAdminPrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser && currentUser.isAdmin ? (
//     <Outlet />
//   ) : (
//     <Navigate to='/sign-in' />
//   );
// }
