import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Box,
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

function TopBar() {
  const { container, logo, toolbar, search, input, iconButton } = useStyles();

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
          <Button
            color="secondary"
            component="a"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
