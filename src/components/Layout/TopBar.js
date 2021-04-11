import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  Paper,
  InputBase,
  IconButton,
  Button,
  Hidden,
} from '@material-ui/core';
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  MoreVert,
  AccountCircle,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    minWidth: 400,
  },
  input: {
    flex: 1,
  },
  iconButton: {},
}));

import { signIn, signOut, useSession } from 'next-auth/client';

function TopBar() {
  const { container, logo, toolbar, search, input, iconButton } = useStyles();
  const { session } = useSession();

  return (
    <AppBar color="default" className={container}>
      <Toolbar className={toolbar}>
        <Box display="flex" alignItems="center">
          <Menu />
          <img src="/yt_logo_rgb_light.png" alt="logo" className={logo} />
        </Box>

        <Hidden mdDown>
          <Box>
            <Paper component="form" className={search}>
              <InputBase
                placeholder="Perquisar…"
                className={input}
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton
                type="submit"
                className={iconButton}
                aria-label="search"
              >
                <Search />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>

        <Box display="flex">
          <IconButton className={iconButton}>
            <VideoCall />
          </IconButton>
          <IconButton className={iconButton}>
            <Apps />
          </IconButton>
          <IconButton className={iconButton}>
            <MoreVert />
          </IconButton>
          {!session ? (
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              onClick={() => signIn('google')}
            >
              Fazer Login
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                onClick={() => signOut()}
                alt="user"
                className={avatar}
                src={session?.user?.image}
                startIcon={<AccountCircle />}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
