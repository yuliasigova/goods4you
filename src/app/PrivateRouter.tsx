import { useGetUserQuery } from '../shared/api/userApi';
import { Navigate, useLocation } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

export const PrivateRoute = ({children}:PrivateRouteProps)=>  {
    const token = localStorage.getItem('token')

    const { data: user , isLoading} = useGetUserQuery(undefined, {
        skip: !token,
      });

    const location = useLocation();
   
 console.log(!token)
  if (isLoading ) {
    return <p>Loading</p>
  }

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
    
//   return (
//     <>
//     {isSuccess
//       ? children
//       : <Navigate to={'/login'} />}
//       </>
    
//   );
    
   
}