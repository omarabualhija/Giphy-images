type IState = {
  user: Iuser | undefined;
  token: string | undefined;
  role: roleType | undefined;
};

//DTO //data transfare object
interface sharedDTO {
  response: boolean;
  typeOfMessage: string;
  message: string;
}

///
