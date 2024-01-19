import axios, {AxiosError, AxiosResponse} from 'axios';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

export const handleError = (error: any) => {
  if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
    console.log('inside error', error);
    // return error.data.message;
    // Do something with this error...
  } else {
    console.error(error);
    // return error.response;
  }
};
