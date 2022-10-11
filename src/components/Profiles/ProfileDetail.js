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

export default function PersonalDetail(props) {
  return (
    <Box sx={{display:"flex",justifyContent:"center"}} padding={7}>
      <Card sx={{width:"550px",boxShadow:"1px 2px 5px grey",}} >
        <Box sx={{ justifyContent: "center", display: "flex", mt: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src={props.data.profile_image}
              sx={{ width: 100, height: 100, padding:0}}
            />
        </Box>
            <CardContent>
              <Stack direction="column" spacing={1} sx={{ mt: 2 ,}} alignItems="center">
              <Typography gutterBottom variant="h5" component="div">
                {props.data.first_name} {props.data.last_name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Email: {props.data.email}
              </Typography>
                <Typography variant="body3" color="text.primary">
                    Graduation Year : {props.data.graduation_year}
                </Typography>
                <Typography variant="body3" color="text.primary">
                    Job : {props.data.job_profile}
                </Typography>
                <Typography variant="body3" color="text.primary">
                    Company : {props.data.company}
                </Typography>
            </Stack>
                <hr/>
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
            </CardContent>
      </Card>
    </Box>
  );
}
