import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PersonalDialogBox from "../../components/Profiles/PersonalDialogBox";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function SearchResultsBox(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <IconButton onClick={props.handleClose}>
          <CloseIcon />
        </IconButton>
        <Stack direction="row" justifyContent="center" spacing={1}>
          <Chip label="Search Results" />
        </Stack>
        <List
          sx={{
            padding: 10,
            paddingTop: "5px !important",
            width: 600,
            maxWidth: 600,
            bgcolor: "background.paper",
          }}
        >
          {props.results.map((data, index) => {
            return (
              <>
                <ListItem
                  key={data.user_id}
                  sx={{
                    border: "2px groove lightblue",
                    borderRadius: 2,
                    marginBlock: 5,
                  }}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar alt={data.first_name} src={data.profile_image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={data.first_name + " " + data.last_name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {"Graduation Year: " + data.graduation_year}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <Stack direction="row" justifyContent="right" spacing={1}>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      See More
                    </Button>
                    {open && (
                      <PersonalDialogBox
                        data={data}
                        index={index}
                        open={open}
                        handleClose={handleClose}
                      />
                    )}
                  </Stack>
                </ListItem>
              </>
            );
          })}
        </List>
      </BootstrapDialog>
    </div>
  );
}
