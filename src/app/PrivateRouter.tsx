import { useGetUserQuery } from '../shared/api/userApi';
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingPage } from '../pages/LoadingPage/LoadingPage';

type PrivateRouteProps = {
  children: JSX.Element;
}

export const PrivateRoute = ({children}:PrivateRouteProps)=>  {
    const token = localStorage.getItem('token')

    const { data: user , isLoading} = useGetUserQuery(undefined,{
        skip: !token,
      });

    const location = useLocation();
   
 
  if (isLoading ) {
    return <LoadingPage/>
  }

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
    
  // return (
  //   <>
  //   {isLoading
  //     ? children
  //     : <Navigate to={'/login'} />}
  //     </>
    
  // );
    
   
}