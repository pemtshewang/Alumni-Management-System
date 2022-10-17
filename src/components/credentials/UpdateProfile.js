import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormLabel } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { useSnackbar } from "notistack";
import { getCurrentUser } from "../../api/authServices";
import dayjs from "dayjs";

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
export default function UpdateProfile(props) {
  const [value, setvalue] = React.useState(dayjs(props.data.date));
  const { serverError, setServerError } = React.useContext(UserContext);
  const [errorMessages, setErrorMessages] = React.useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [tempFormData, setTempFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    cid_Number: "",
    graduation_year: "",
    company: "",
    job_profile: "",
  });

  const handleDateChange = (newvalue) => {
    setvalue(newvalue);
  };

  function handleChange(event) {
    setTempFormData({
      ...tempFormData,
      [event.target.name]: event.target.value,
    });
  }
  // Function to handleSubmit
  // Important here
  //my
  const handleSubmit = (event) => {
    event.preventDefault();
    setTempFormData({
      ...tempFormData,
      graduation_year: value.format("YYYY-MM-DD"),
    });
    let formdata = new FormData();
    formdata.append(
      "first_name",
      tempFormData.first_name ? tempFormData.first_name : props.data.first_name
    );
    formdata.append(
      "last_name",
      tempFormData.last_name ? tempFormData.last_name : props.data.last_name
    );
    formdata.append(
      "email",
      tempFormData.email ? tempFormData.email : props.data.email
    );
    formdata.append(
      "cid_Number",
      tempFormData.cid_Number ? tempFormData.cid_Number : props.data.cid_Number
    );
    formdata.append("graduation_year", tempFormData.graduation_year);
    formdata.append(
      "job_profile",
      tempFormData.job_profile
        ? tempFormData.job_profile
        : props.data.job_profile
    );
    formdata.append(
      "company",
      tempFormData.company ? tempFormData.company : props.data.company
    );

    return axios
      .patch(
        `http://localhost:8000/api/alumni/register/update/${
          getCurrentUser().id
        }/`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        //useContext for server error
        setServerError(false);
        localStorage.removeItem("error_message");
        enqueueSnackbar("Profile Updated Successfully, You May Exit the Page", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      })
      .catch((error) => {
        //useContext for server error
        setServerError(true);
        localStorage.setItem(
          "error_message",
          JSON.stringify(error.response.data)
        );
        let errorMap = new Map(
          Object.entries(JSON.parse(JSON.stringify(error.response.data)))
        );
        let errorArr = [];
        errorMap.forEach((key, value) => {
          errorArr.push(key[0]);
        });
        setErrorMessages(errorArr);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{ marginTop: 2 }}
        maxWidth="xs"
        style={styles}
      >
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <EditIcon />
          </Avatar>
          <Typography component="b" variant="b">
            Edit Profile
          </Typography>
          {serverError &&
            errorMessages.map((msg) => {
              return (
                <Stack sx={{ width: "100%", mt: 1 }} spacing={2}>
                  <Alert severity="error">{msg.toUpperCase()}</Alert>
                </Stack>
              );
            })}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first_name"
                  fullWidth
                  id="firstName"
                  label={props.data.first_name}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label={props.data.last_name}
                  name="last_name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="cid_Number"
                  label={props.data.cid_Number}
                  type="text"
                  id="cidInput"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label={props.data.email}
                  name="email"
                  onChange={handleChange}
                  inputProps={{ type: "email", maxLength: 50, minLength: 5 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="h1" sx={{ mt: 2 }}>
                  Year of Graduation
                </FormLabel>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Pick Date"
                    inputFormat="YYYY-MM-DD"
                    value={value}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    name="graduation_year"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="job_profile"
                  label={props.data.job_profile}
                  type="text"
                  id="jobTitle"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="company"
                  label={props.data.company}
                  type="text"
                  id="company"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want enable/disable my notifications."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update My Profile
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
