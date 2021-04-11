import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/client';
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
  const { session } = useSession();
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Canal 1' },
    { id: 2, name: 'Canal 2' },
    { id: 3, name: 'Canal 3' },
    { id: 4, name: 'Canal 4' },
    { id: 5, name: 'Canal 5' },
    { id: 6, name: 'Canal 6' },
    { id: 7, name: 'Canal 7' },
    { id: 8, name: 'Canal 8' },
  ]);
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
      <Box>
        {!session ? (
          <Box mx={4} my={2}>
            <Typography variant="body2">
              Faça Login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box>
              <Button
                color="secondary"
                variant="outlined"
                startIcon={<AccountCircle />}
                onClick={() => signIn('google')}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
        ) : (
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                INSCRIÇÔES
              </ListSubheader>
            }
          >
            {subscriptions.map((item) => (
              <ListItem
                key={item.id}
                button
                classes={{ root: listItems }}
                selected={isSelected(item)}
              >
                <ListItemIcon>
                  <Avatar className={avatar}>H</Avatar>
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: listItemText,
                  }}
                  primary={item.name}
                />
              </ListItem>
            ))}
          </List>
        )}
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
