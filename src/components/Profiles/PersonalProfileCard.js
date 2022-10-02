import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import PersonalDialogBox from "./PersonalDialogBox";

export default function PersonalProfileCard() {
  const [profile,showProfile] = React.useState(false);
  function toggleView(){
    showProfile(prevState => !prevState);
    return profile;
  }
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ justifyContent: "center", display: "flex", mt: 2 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://source.unsplash.com/random"
          sx={{ width: 100, height: 100 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pem Tshewang
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full Stack Developer
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Link
              href="https://www.facebook.com/pem.tshewang.3"
              target="_blank"
            >
              <SvgIcon component={FacebookSharpIcon} />
            </Link>
            <Link href="">
              <SvgIcon component={TwitterIcon} />
            </Link>
            <Link href="">
              <SvgIcon component={InstagramIcon} />
            </Link>
            <Link href="">
              <SvgIcon component={LinkedInIcon} />
            </Link>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <IconButton
              color="primary"
              edge="start"
              sx={{ marginTop: "5px", marginLeft: "2px" }}
            >
              <AccountBoxIcon />
            </IconButton>
            <Button variant="contained" onClick={() => toggleView()}>
              Show More
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
    {profile && <PersonalDialogBox state={true}/>}
    </div>
  );
}
