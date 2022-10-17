import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { logout} from '../../api/authServices';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useSnackbar } from 'notistack';

export default function UserLogout(props) {

  const { enqueueSnackbar} = useSnackbar();
  const { setIsLoggedIn,notifications,setNotifications,setCount } = useContext(UserContext);

  const navigate = useNavigate();

  // create a function to set the notifications empty and smoothly reload the page 

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logging out?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={async()=>{
            logout();
            setIsLoggedIn(false);
            props.handleClose();
            setNotifications([]);
            setCount(0);
            enqueueSnackbar("Successfully Logged Out",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"center"}});
            navigate("/");
            }}>Logout</Button>
          <Button onClick={props.handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
