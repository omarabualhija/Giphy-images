import {useState} from 'react';
import {useAppDispatch} from '../Redux';
import {loginUser} from '../Redux/slices/user/userSlice';

const user: userType = {
  id: 1,
  firstName: 'omar',
  lastName: 'abu alhija',
  email: 'omar.hija12@gmail.com',
};

export const useLogin = ({onError, onSuccess}: callbackFunctionType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const Login = ({email, password}: LoginPropsType) => {
    if (email && password) {
      dispatch(loginUser({email, password}));
      setLoading(true);
      setError(false);
      onSuccess('Welcome');
      //TODO:handleLogin API
      return;
    }
    setError(true);
    setLoading(false);
    onError('fill all fields');
  };

  return {Login, loading, error};
};
