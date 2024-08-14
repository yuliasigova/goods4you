import { useGetUserQuery } from '../shared/api/userApi';
import { Navigate, useLocation } from 'react-router-dom';
import { LoadingPage } from '../pages/LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';
import { selectToken } from '../shared/slice/UserSlice';

type PrivateRouteProps = {
  children: JSX.Element;
}

export const PrivateRoute = ({children}:PrivateRouteProps)=>  {
    const localToken = localStorage.getItem('token')
    const token = useSelector(selectToken)
    const { isLoading} = useGetUserQuery(undefined, {skip: Boolean(token)});

    const location = useLocation();

    if (isLoading ) {
      return <LoadingPage/>
    }

  if (!localToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
   
}