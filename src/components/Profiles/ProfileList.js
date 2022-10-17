import React from "react";
import PersonalProfileCard from "./PersonalProfileCard";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import axiosInstance from "../../api/axios";
import { Chip } from "@mui/material";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {Stack} from "@mui/material";

export default function ProfileList() {
  const [usersList, setUsersList] = React.useState([]);
  const [appState, setAppState] = React.useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      await axiosInstance
        .get("alumni/all-members/")
        .then((response) => {
          setUsersList(response.data);
          setAppState(true);
        })
        .catch((error) => {
          alert(error);
        });
    };
    fetchUsers();
  }, [setAppState]);
  return (
    <>
      <Stack
        sx={{mt:5,display: "flex", justifyContent: "center", alignItems: "center"}}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Chip
          variant="filled"
          color="primary"
          icon={<TagFacesIcon />}
          label={"Spreading Good Deeds"}
        />
       <Chip icon={<VolunteerActivismIcon />} color="secondary" label="Sharing Enthusiasm" />
       <Chip icon={<FavoriteIcon />} color="primary" label="Sharing Love" />
       <Chip icon={<AccessibilityIcon />} color="secondary" label="Sharing Happiness" />
       <Chip icon={<MenuBookIcon />} color="secondary" label="Sharing Knowledge" />
      </Stack>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columns={12}
        spacing={5}
        width="inherit"
        marginTop={10}
      >
        {appState ? (
          usersList.map((data) => {
            return (
              <Grid
                item
                key={data.email}
                justifyContent="center"
                alignItems="center"
              >
                <PersonalProfileCard
                  key={data.id}
                  data={data}
                  onClick={false}
                />
              </Grid>
            );
          })
        ) : (
          <Box
            sx={{
              margin: "0 auto",
            }}
          >
            <Box sx={{ margin: "0 auto", width: "fit-content" }}>
              <CircularProgress color="success" />
            </Box>
            <Typography variant="p" component="p">
              Waiting for the resources to load
            </Typography>
          </Box>
        )}
      </Grid>
    </>
  );
}
