import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Box, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab/';

import { useAuthContext } from '../context/AuthContext';
import useLogin from '../hooks/useLogin';

import { POKEMONS_PATH } from '../router/constants';

const Login: FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { onInputsChange, onSubmit, email, password, isLoading, errorAPI } =
    useLogin();

  useEffect(() => {
    if (user.isLogged && user.isLoaded) navigate(POKEMONS_PATH);
  }, [user]);

  return (
    <Stack
      minHeight={'100vh'}
      px={1}
      justifyContent="center"
      maxWidth={'40ch'}
      spacing={3}
      m="auto">
      <Box textAlign="center">👋 Hello Onepilot</Box>
      <Box mb={2} minHeight="50px">
        {errorAPI && <Alert severity="error">{errorAPI}</Alert>}
      </Box>

      <TextField
        fullWidth
        focused
        label="Email"
        type="email"
        name="email"
        onChange={onInputsChange}
        helperText={email.error !== '' ? email.error : ' '}
        error={email.error !== ''}
        color="secondary"
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        name="password"
        onChange={onInputsChange}
        helperText={password.error !== '' ? password.error : ' '}
        error={password.error !== ''}
        color="secondary"
      />

      <LoadingButton
        type="submit"
        onClick={onSubmit}
        fullWidth
        loading={isLoading}
        color="secondary"
        variant="outlined">
        Connection
      </LoadingButton>
    </Stack>
  );
};

export default Login;
