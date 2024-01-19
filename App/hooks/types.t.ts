type callbackFunctionType = {
  onSuccess: (params?: any) => void;
  onError: (params?: any) => void;
};

type LoginPropsType = {
  email: string;
  password: string;
};
