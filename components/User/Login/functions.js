import { login } from '../../../Api/userApi/userAuthRequest';

export const emailChangeHandler = (event, setEnteredEmail) => {
  setEnteredEmail(event.target.value);
};

export const passwordChangeHandler = (event, setEnteredPassword) => {
  setEnteredPassword(event.target.value);
};

export const showPassword = (passwordShown, setPasswordShown) => {
  if (passwordShown) { setPasswordShown(false); } else { setPasswordShown(true); }
};

export const submitHandler = async (
  event,
  enteredEmail,
  enteredPassword,
  setErrMessage,
  setResponse,
) => {
  event.preventDefault();
  if (enteredEmail.includes('@') && enteredEmail.trim().length > 7) {
    if (enteredPassword.trim().length > 5) {
      const response = await login({
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log(response);
      setResponse(response);
    } else {
      setErrMessage('password minimum 5 numbers');
    }
  } else {
    setErrMessage('wrong email');
  }
};
