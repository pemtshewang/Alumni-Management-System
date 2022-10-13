import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, FormLabel } from "@mui/material";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { signup } from "../../api/authServices";

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

export default function SignUp() {
  const [value, setvalue] = React.useState(dayjs(new Date()));
  const [image, setImage] = React.useState(null);
  const [FormData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    cid_Number: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    graduation_year: "",
    job_profile: "",
  });

  const handleDateChange = (newvalue) => {
    setvalue(newvalue);
  };

  function handleChange(event){
    if([event.target.name] == "profile_image"){
      setImage({image : event.target.files});
    }else{
    setFormData({ ...FormData, 
      [event.target.name]: event.target.value });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...FormData,
      showPassword: !FormData.showPassword,
      showConfirmPassword: !FormData.showConfirmPassword,
    });
  };

  //my
  const handleSubmit = (event) => {
    event.preventDefault();
    if (FormData.password !== FormData.confirmPassword) {
      alert("Password and Confirm Password does not match");
      return;
    }
    setFormData({ ...FormData ,
      graduation_year:value.format("YYYY-MM-DD").toString(),
    });
    signup(FormData,image);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={styles}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="b" variant="b">
            Sign up
          </Typography>
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
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cid_Number"
                  label="Citizen ID Number"
                  type="text"
                  id="cidInput"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
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
                    inputFormat="DD/MM/YYYY"
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
                  label="Job Title"
                  type="text"
                  id="jobTitle"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={FormData.showPassword ? "text" : "password"}
                    value={FormData.password}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {FormData.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="confirmPassword"
                    type={FormData.showConfirmPassword ? "text" : "password"}
                    value={FormData.confirmPassword}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {FormData.showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography component="b" variant="b" sx={{ml:1}}>
                  People can know you better by your picture
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{ border: 1, borderColor: "grey.500",ml: 1 }}
                    onChange={handleChange}
                    name="profile_image"
                  >
                    <input name="profile_image" hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive notifcations through email ."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
