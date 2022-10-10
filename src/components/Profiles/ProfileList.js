import React from "react";
import PersonalProfileCard from "./PersonalProfileCard";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import  CircularProgress  from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import axiosInstance from "../../api/axios";

export default function ProfileList() {
  const [usersList, setUsersList] = React.useState([]);
  const [appState,setAppState] = React.useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      await axiosInstance.get("alumni/all-members/")
      .then((response)=>{;
      setUsersList(response.data);
      setAppState(true);
      })
      .catch((error)=>{
        alert(error);
      })
    }
    fetchUsers();
  },[setAppState]);
  return (
    <Grid container justifyContent="center" alignItems="center" columns={12} spacing={5} width="inherit" marginTop={10} >
      {appState ? usersList.map(data=>{
        return(
      <Grid item  key={data.email} justifyContent="center" alignItems="center">
        <PersonalProfileCard key={data.id}
        data={data} onClick={false} />
      </Grid>)
      }) :<Box sx={{
        margin:"0 auto",
      }}><Box sx={{margin:"0 auto", width:"fit-content"}}><CircularProgress color="success" /></Box>
            <Typography variant="p" component="p">
              Waiting for the resources to load
            </Typography>
      </Box>}
    </Grid>
  );
}
