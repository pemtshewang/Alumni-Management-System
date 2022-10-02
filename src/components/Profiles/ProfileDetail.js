import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";

export default function PersonalDetail() {
  return (
    <Box sx={{display:"flex",justifyContent:"center"}} padding={7}>
      <Card sx={{width:"250px",boxShadow:"1px 2px 5px grey",}} >
        <Box sx={{ justifyContent: "center", display: "flex", mt: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://source.unsplash.com/random"
              sx={{ width: 100, height: 100, padding:0}}
            />
        </Box>
            <CardContent>
              <Stack direction="column" spacing={1} sx={{ mt: 2 ,}} alignItems="center">
              <Typography gutterBottom variant="h5" component="div">
                Pem Tshewang
              </Typography>
              <Typography variant="body2" color="text.primary">
                <q>We are all one</q>
              </Typography>
                <Typography variant="body3" color="text.secondary">
                    Graduation Year : 2021
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    Job : Backend Developer
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    Company : Google
                </Typography>
                <Typography variant="body3" color="text.secondary">
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
