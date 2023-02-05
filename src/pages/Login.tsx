import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Box, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab/';

import { useAuthContext } from '../context/AuthContext';
import useLogin from '../hooks/useLogin';
import { HEIHGT_HEADER } from '../components/HeaderAppBar';
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
    <Box
      sx={{
        px: 1,
        minHeight: `calc(100vh - ${HEIHGT_HEADER})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '40ch',
        margin: 'auto',
      }}>
      <Box>
        <Box textAlign="center" mb={1}>
          👋 Hello Onepilot
        </Box>
        <Box mb={2} minHeight="50px">
          {errorAPI && <Alert severity="error">{errorAPI}</Alert>}
        </Box>

        <Box sx={{ mb: 2 }}>
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
        </Box>
        <Box sx={{ mb: 3 }}>
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
        </Box>

        <LoadingButton
          type="submit"
          onClick={onSubmit}
          fullWidth
          loading={isLoading}
          color="secondary"
          variant="outlined">
          Connection
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default Login;
