import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import UserLogout from "./Logout";
import PersonalDialogBox from "../Profiles/PersonalDialogBox";
import { getCurrentUser } from "../../api/authServices";
import axiosInstance from "../../api/axios";
import { useEffect } from "react";
import UpdateProfile from "./UpdateProfile";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import { Nav } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function EditProfileDialog(props) {
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
              Update Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <UpdateProfile data={props.data} />
      </Dialog>
    </div>
  );
}
const deleteUserEvent = async (id) => {
  await axiosInstance.delete(
    `http://localhost:8000/api/events/user-events/${id}/`,
    {
      headers: {
        Authorization: `Bearer ${getCurrentUser().access}`,
      },
    }
  );
};
function EventProfileDialog(props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
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
              Manage my events
            </Typography>
          </Toolbar>
        </AppBar>
        {props.data.map((item) => (
          <ListItem disablePadding sx={{ width: 50 }}>
            <ListItemButton onClick={()=>{
              deleteUserEvent(item.id)
              enqueueSnackbar("Event deleted successfully", {
                variant: "success",
              });
              navigate("/events")
            }}>
              <ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ width: 200, color: "black !important" }}
                />
                <DeleteIcon />
              </ListItemIcon>
            </ListItemButton>
            <hr />
          </ListItem>
        ))}
        <List></List>
      </Dialog>
    </div>
  );
}
//get the current user detail if logged in

export default function ProfileAvatarMenu() {
  const data = getCurrentUser();
  const [userData, setUserData] = React.useState("");
  const [openLogout, setOpenLogout] = React.useState(false);
  const [diOpen, handleOpen] = React.useState(false);
  const [editProfileDialog, setEditProfileDialog] = React.useState(false);
  const [eventOpen, setEventOpen] = React.useState(false);
  const [userEvent, setUserEvent] = React.useState([]);

  function editProfile() {
    setEditProfileDialog(true);
  }
  function closeEditProfile() {
    setEditProfileDialog(false);
  }
  function closeListEvent() {
    setEventOpen(false);
  }
  function openListEvent() {
    setEventOpen(true);
  }

  useEffect(() => {
    const fetchUser = async () => {
      await axiosInstance
        .get(`alumni/all-members/${getCurrentUser().id}/`)
        .then((response) => {
          response.data.profile_image =
            "http://localhost:8000" + response.data.profile_image;
          setUserData(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    };
    fetchUser();
  }, [handleOpen]);

  // Fetching User Events
  useEffect(() => {
    const fetchUserEvent = async () => {
      await axiosInstance
        .get(
          `http://localhost:8000/api/events/user-events/${
            getCurrentUser().id
          }/`,
          {
            headers: {
              Authorization: `Bearer ${getCurrentUser().access}`,
            },
          }
        )
        .then((response) => {
          setUserEvent(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    };
    fetchUserEvent();
  }, [handleOpen]);

  function showProfile() {
    handleOpen(true);
  }

  function handleBtnClose() {
    handleOpen(false);
  }

  function handleLogoutOpen() {
    setOpenLogout(true);
  }

  function handleLogoutClose() {
    setOpenLogout(false);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid grey",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 50, height: 40 }}
              src={"http://localhost:8000/media/" + data.profile_image}
            >
              {data.first_name.substr(0, 1)}
            </Avatar>
          </IconButton>
        </Tooltip>
        <Nav.Link onClick={handleClick}>
          {" "}
          <b>{data.first_name}</b>
          <ArrowDropDownIcon />
        </Nav.Link>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={showProfile}>
          <Avatar /> Profile
        </MenuItem>
        {/* Delete user event menu */}
        <MenuItem onClick={openListEvent}>
          <Avatar>
            <EventRepeatIcon />
          </Avatar>
          Manage my events
        </MenuItem>
        {/* *** */}
        <Divider />
        <MenuItem onClick={editProfile}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Edit My Account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <a
            className="profile-avatar__text"
            onClick={handleLogoutOpen}
            href="#"
          >
            Logout
          </a>
        </MenuItem>
      </Menu>

      {openLogout && (
        <UserLogout open={openLogout} handleClose={handleLogoutClose} />
      )}
      {diOpen && (
        <PersonalDialogBox
          open={diOpen}
          handleClose={handleBtnClose}
          data={userData}
        />
      )}
      {editProfileDialog && (
        <EditProfileDialog
          open={editProfileDialog}
          data={userData}
          close={closeEditProfile}
        />
      )}
      {eventOpen && (
        <EventProfileDialog
          open={eventOpen}
          data={userEvent}
          close={closeListEvent}
        />
      )}
    </React.Fragment>
  );
}
