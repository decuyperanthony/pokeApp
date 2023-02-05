import { FC } from 'react';
import { instance } from '../service/config';

import { Stack, Typography, Button } from '@mui/material';
import { useAuthContext } from '../context/AuthContext';
import { LOGOUT_URL } from '../service/endPoint';

export const HEIHGT_HEADER = '50px';

const HeaderAppBar: FC = () => {
  const { user, setUser } = useAuthContext();

  const handleLogout = async () => {
    instance()
      .post(LOGOUT_URL)
      .then(() => {
        setUser({ isLogged: false, isLoaded: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      px={2}
      bgcolor="#F2F2F2"
      height={HEIHGT_HEADER}
      direction="row">
      {user.user && (
        <>
          <Typography>👋 {user?.user?.email}</Typography>{' '}
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        </>
      )}
    </Stack>
  );
};

export default HeaderAppBar;
