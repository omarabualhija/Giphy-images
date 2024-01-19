export let checkEmail = (email: string): boolean => {
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return emailRegex.test(email);
};
export let checkPassword = (password: string): boolean => {
  const passwordRegix = new RegExp(/^(?=.*\d).{8,}$/);
  return passwordRegix.test(password);
};
