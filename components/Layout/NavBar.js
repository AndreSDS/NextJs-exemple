import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import {
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListISubheader,
  Avatar,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import {
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History,
  AccountCircle,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItems: {
    padding: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemsText: {
    fontSize: 14,
  },
}));

const firstMenu = [
  { id: 1, label: 'Início', path: '/', icon: Home },
  { id: 2, label: 'Em alta', path: '/trending', icon: Whatshot },
  { id: 3, label: 'Inscrições', path: '/subscriptions', icon: Subscriptions },
];

const secondMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History },
];

function NavBar() {
  const router = useRouter();
  const {
    mobileDrawer,
    desktopDrawer,
    avatar,
    listItems,
    listItemsText,
  } = useStyles();

  const isSelected = (item) => {
    return router.pathname === item.path;
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {firstMenu.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              button
              key={item}
              classes={{ root: listItems }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                classes={{ primary: listItemsText }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondMenu.map((item) => {
          const Icon = item.icon;

          return (
            <ListItem
              button
              key={item}
              classes={{ root: listItems }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                classes={{ primary: listItemsText }}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça Login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box>
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Hidden mdDown>
      <Drawer
        variant="persistent"
        anchor={'left'}
        open
        classes={{
          paper: desktopDrawer,
        }}
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
