import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { getCurrentUser } from "../../api/authServices";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

// import NotificationsGetter from './NotificationsGetter';

async function getNotifications() {
  const result = await axios.get(
    "http://localhost:8000/api/events/notifications",
    {
      headers: {
        authorization: `Bearer ${getCurrentUser().access}`,
      },
    }
  );
  return result.data;
}

function AlignItemsList(props) {
  const {isLoggedIn} = useContext(UserContext);
  return (
    isLoggedIn ? (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {props.data.map((value) => { return(
        <ListItem alignItems="flex-start" width="100%">
          <ListItemAvatar>
            <Avatar alt={value.author} src={"http://localhost:8000"+value.image}/>
          </ListItemAvatar>
          <ListItemText
            primary={new Date(value.created_at).toLocaleString()}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {"Author :"+value.author}
                </Typography>
                <br />
                {value.description}
              </React.Fragment>
            }
          />
          <Divider variant="inset" component="li" />
          <Button variant="outlined">Mark as Read</Button>
        </ListItem>)
      })}
    </List>): <Typography variant="h6" component="div">You are not logged in</Typography>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NotificationDialog(props) {
  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.close}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Your Notifications
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ margin: "10px auto" }}>
          <AlignItemsList data={props.data} />
        </Box>
      </Dialog>
    </div>
  );
}

export default function NotificationBadge() {
  const { isLoggedIn, notifications, setNotifications } =
    useContext(UserContext);

  const [open, setOpen] = React.useState(false);

  function close() {
    setOpen(false);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      getNotifications().then((data) => setNotifications(data));
    }
  }, [isLoggedIn, setNotifications]);
  function notificationsLabel(count) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }
  const styles = {
    fontSize: "var(--bs-nav-link-font-size)",
    fontWeight: "var(--bs-nav-link-font-weight)",
    color: "var(--bs-nav-link-color)",
    textDecoration: "none",
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
  };

  return (
    <>
      <IconButton
        aria-label={notificationsLabel(100)}
        size="small"
        onClick={handleClickOpen}
      >
        <Badge badgeContent={notifications.length} color="secondary">
          <FontAwesomeIcon icon={faBell} color="black" />
        </Badge>
      </IconButton>
      <NavLink onClick={handleClickOpen} style={styles}>
        Notifications
      </NavLink>
      {open && (
        <NotificationDialog open={open} close={close} data={notifications} />
      )}
    </>
  );
}
