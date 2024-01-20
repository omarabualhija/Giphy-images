type responseCode = 200 | 400 | 401 | 403 | 404 | 414 | 429;
type responseMessage =
  | 'OK'
  | 'Bad Request'
  | 'Unauthorized'
  | 'Forbidden'
  | 'Not Found'
  | 'URI Too Long'
  | 'Too Many Requests';
