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
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { getCurrentUser } from "../../../api/authServices";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";

const theme = createTheme();

const styles = {
  boxShadow: "1px 2px 5px grey",
  borderRadius: "5px",
  paddingBottom: "",
};

export default function EventCreate() {
  const [image, setImage] = React.useState(null);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    date: dayjs("2018-01-01T00:00:00.000Z"),
    time: dayjs("2018-01-01T00:00:00.000Z"),
    author: getCurrentUser().id,
  });
  //handle the submitted data using axios
  const [dateValue, setDateValue] = React.useState(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [timeValue, setTimeValue] = React.useState(
    dayjs("2018-01-01T00:00:00.000Z")
  );

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const handleTimeChange = (newValue) => {
    setTimeValue(newValue);
  };
  //date and time 
  // handle the date and time change using useeffect hook
  React.useEffect(() => {
    setFormData({
      ...formData,
      date: dateValue,
      time: timeValue,
    });
  }, [dateValue,timeValue]);

  function handleChange(event) {
    if ([event.target.name] == "image") {
      setImage({ image: event.target.files });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  }

  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      date: dateValue.format("YYYY-MM-DD"),
      time: timeValue.format("HH:mm"),
      });
    let Formdata = new FormData();
    Formdata.append("title", formData.title);
    Formdata.append("description", formData.description);
    Formdata.append("date", formData.date);
    Formdata.append("time", formData.time);
    image && Formdata.append("image", image.image[0]);
    Formdata.append("author", formData.author);
    
    return axios
      .post("http://localhost:8000/api/events/create-event/",Formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization": `Bearer ${getCurrentUser().access}`}
        }
      )
      .then((response) => {
        //useContext for server error
        enqueueSnackbar("Event created successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },  
        });
        navigate("/events");
        window.location.reload();
      })
      .catch((error) => {
        //useContext for server error
        enqueueSnackbar("Event submission failed, Retry Submitting", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },  
        });
        window.scrollTo(0, 0);
      });
    }
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="Time"
                    value={timeValue}
                    onChange={handleTimeChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Pick Date"
                    inputFormat="YYYY-MM-DD"
                    value={dateValue}
                    onChange={handleDateChange}
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
                  name="location"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography component="b" variant="b" sx={{ ml: 1 }}>
                    Attach a photo for the event
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      sx={{ border: 1, borderColor: "grey.500", ml: 1 }}
                      onChange={handleChange}
                    >
                      <input
                        name="image"
                        hidden
                        accept="image/*"
                        type="file"
                      />
                      <PhotoCamera />
                    </IconButton>
                  </Typography>
                </Box>
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
