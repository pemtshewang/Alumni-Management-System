import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SpecialEvent from "../Events/EventSpecial";
import EventCard from "./EventCard";
import axiosInstance from "../../api/axios";

export default function EventSection() {
  // API calls here and setting app loading
  const [eventsList, setEventsList] = React.useState([]);
  const [appState, setAppState] = React.useState(false);
  React.useEffect(() => {
    const fetchUsers = async () => {
      await axiosInstance
        .get("events/all-events/")
        .then((response) => {
          setEventsList(response.data);
          setAppState(true);
        })
        .catch((error) => {
          alert(error);
        });
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
              Details here
            </Grid>
            {/* -------------------------------------------------------------- */}

            {/* User Events Render Logics */}
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              width="inherit"
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
