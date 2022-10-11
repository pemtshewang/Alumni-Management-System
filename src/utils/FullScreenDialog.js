import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
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
              Event Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ margin: "10px auto" }}>
          <Card
            sx={{
              width: 500,
              marginTop: "10px",
              boxShadow: "2px 3px 5px gray",
              padding: "10px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="250"
                height="140"
                image={props.data.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.data.title}
                </Typography>
                <Divider />
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Description | Invitation
                  <Typography variant="body2" color="text.secondary">
                    {props.data.description}
                  </Typography>
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Date
                  <Typography variant="body2" color="text.secondary">
                    {props.data.date}
                  </Typography>
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Time
                  <Typography variant="body2" color="text.secondary">
                    {props.data.time}
                  </Typography>
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Venue
                  <Typography variant="body2" color="text.secondary">
                    Mph Hall
                    {/* {props.data.venue} */}
                  </Typography>
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.primary">
                  Organizer
                  <Typography variant="body2" color="text.secondary">
                    {props.hostName}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Dialog>
    </div>
  );
}
