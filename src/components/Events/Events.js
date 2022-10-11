import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SpecialEvent from "../Events/EventSpecial";
import EventCard from "./EventCard";
import axiosInstance from "../../api/axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import axios from "axios";

export default function EventSection() {
  // API calls here and setting app loading
  const [eventsList, setEventsList] = React.useState([]);
  const [newEventsList, setNewEventsList] = React.useState([]);
  const [appState, setAppState] = React.useState(false);
  React.useEffect(() => {
    const fetchUsers = async () => {
      axios.all([
        await axiosInstance.get("events/all-events/"),
        await axiosInstance.get("events/past-events/")])
        .then(axios.spread((res1,res2) => {
          setEventsList(res1.data);
          setNewEventsList(res2.data);
          setAppState(true);
        }))
    };
    fetchUsers();
  }, [setAppState]);

  return (
    <Grid container justifyContent="center" alignItems="center" columns={10} marginTop={8}  spacing={4} width="inherit" marginBottom={10}>
         {appState ? (
          <>
            <Grid item xs={5}>
              <SpecialEvent />
            </Grid>
            {/* The total event's counts on in the panel are reflected  */}
            <Grid item xs={3}>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EventAvailableOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Events Hosted" secondary={`${eventsList.length} Event`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CalendarMonthOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Upcoming Events" secondary={`${newEventsList.length} Event`}/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PermContactCalendarOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Events Hosted by" secondary="10 people" />
      </ListItem>
    </List>

            </Grid>
            {/* -------------------------------------------------------------- */}

            {/* User Events Render Logics */}
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              width="inherit"
              columnGap={4}
              rowGap={4}
              sx={{ margin:"0 auto" }}
            >
              {eventsList.map((data) => {
                return(
                <EventCard key={data.id} data={data} />
                )
              })}
            </Grid>
          </>
        ) : (
          <h1>Loading Screen</h1>
        )}
        {/* ------------------------------------ */}
      </Grid>
  );
}
