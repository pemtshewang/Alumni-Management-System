import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SpecialEvent from "../Events/EventSpecial";
import EventCard from "../Events/EventCard";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//make a box shadow

export default function EventSection() {
  return (
    <Grid container columns={12} rowSpacing={2} padding={5} spacing={2}>
      <Grid item xs={8}>
        <SpecialEvent />
      </Grid>
      <Grid item xs={4}>
        Details here
      </Grid>
      <Grid item xs={4}>
        <EventCard />
      </Grid>
      <Grid item xs={4}>
        <EventCard />
      </Grid>
      <Grid item xs={4}>
        <EventCard />
      </Grid>
      <Grid item xs={4}>
        <EventCard />
      </Grid>
      <Grid item xs={4}>
        <EventCard />
      </Grid>
    </Grid>
  );
}
