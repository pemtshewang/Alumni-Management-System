import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EventIcon from "@mui/icons-material/Event";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="">
        Alumni Management System
      </Link>{" "}
    </Typography>
  );
}

const theme = createTheme();

const styles = {
  boxShadow: "1px 2px 5px grey",
  borderRadius: "5px",
  paddingBottom: "",
};

export default function EventCreate() {
  const navigate = useNavigate();
  const {isLoggedIn} = useContext(UserContext);
  const [FormData, setFormData] = React.useState({
    title: "",
    description: "",
    date: null,
    time: null,
    author: "",
  });

 const [value, setValue] = React.useState(dayjs(new Date()));

  const handleDateTimeChange= (newValue) => {
    setValue(newValue);
  };

  const handleChange = (prop) => (event) => {
    setFormData({ ...FormData, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(FormData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={styles}>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <EventIcon />
          </Avatar>
          <Typography component="b" variant="b">
            Create Event
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-title"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Event Name"
                  onChange={handleChange("title")}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={3}
                  id="description"
                  label="Event Description"
                  name="description"
                  autoComplete="event-description"
                  onChange={handleChange("description")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Time"
                    value={value}
                    onChange={handleDateTimeChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Pick Date"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleDateTimeChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="venue"
                  label="Event Venue"
                  type="text"
                  fullWidth
                  required
                  name="venue"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to notify others through email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create an Event
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/events" variant="body2">
                  List Other Scheduled Events
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
