import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { instance } from '../service/config';
import { validateEmail } from '../utils/utils.auth';

import { useAuthContext } from '../context/AuthContext';
import { POKEMONS_PATH } from '../router/constants';
import { LOGIN_URL } from '../service/endPoint';

type InputStruct = {
  value: string;
  error: string;
};

const initInputState = { value: '', error: '' };

const useLogin = (): {
  // eslint-disable-next-line no-unused-vars
  onInputsChange: (e: { target: { name: string; value: string } }) => void;
  onSubmit: () => void;
  password: InputStruct;
  isLoading: boolean;
  email: InputStruct;
  errorAPI: string;
} => {
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [email, setEmail] = useState<InputStruct>(initInputState);
  const [password, setPassword] = useState<InputStruct>(initInputState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorAPI, setErrorAPI] = useState('');

  const onInputsChange = (e: { target: { name: string; value: string } }) => {
    const inputValue = e.target.value;
    if (e.target.name === 'email') {
      setEmail({ value: inputValue, error: '' });
    }
    if (e.target.name === 'password') {
      setPassword({ value: inputValue, error: '' });
    }
  };

  const onSubmit = () => {
    let error = false;

    if (email.value === '') {
      error = true;
      setEmail({ ...email, error: 'Email requis' });
    }

    if (!validateEmail(email.value)) {
      error = true;
      setEmail({
        ...email,
        error: "Le format de votre e-mail n'est pas corect",
      });
    }

    if (password.value === '') {
      error = true;
      setPassword({ ...password, error: 'Mot de passe requis' });
    }

    if (error) return;
    setIsLoading(true);
    const body = {
      email: email.value,
      password: password.value,
    };

    instance()
      .post(LOGIN_URL, body)
      .then((res) => {
        setUser({
          isLogged: res.data.ok,
          user: res.data.user,
          isLoaded: false,
        });
        navigate(POKEMONS_PATH);
      })
      .catch((e) => {
        setErrorAPI(e.response.data.error);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    onInputsChange,
    onSubmit,
    password,
    isLoading,
    email,
    errorAPI,
  };
};

export default useLogin;
