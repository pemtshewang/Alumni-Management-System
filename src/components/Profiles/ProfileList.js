import React from "react";
import PersonalProfileCard from "./PersonalProfileCard";
import Grid from "@mui/material/Grid";

export default function ProfileList() {
  return (
    <Grid container columns={12} rowGap={5} marginTop={10} >
      <Grid item xs={4}>
        <PersonalProfileCard onClick={false} />
      </Grid>
      <Grid item xs={4}>
        <PersonalProfileCard onClick={false} />
      </Grid>
      <Grid item xs={4}>
        <PersonalProfileCard />
      </Grid>
      <Grid item xs={4}>
        <PersonalProfileCard />
      </Grid>
    </Grid>
  );
}
