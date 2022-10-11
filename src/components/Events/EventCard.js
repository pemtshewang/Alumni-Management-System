import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
import FullScreenDialog from "../../utils/FullScreenDialog";
import axiosInstance from "../../api/axios";
import { useEffect } from "react";
import { Grid } from "@mui/material";

const boxShadow = {
  boxShadow: "1px 2px 5px grey",
  borderRadius: "5px",
};

export default function EventCard(props) {
  const [hostDetail, setHostDetail] = React.useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      await axiosInstance
        .get(`alumni/all-members/${props.data.author}/`)
        .then((response) => {
          setHostDetail(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    };
    fetchUsers();
  }, [setHostDetail, props.data.author]);
  const [cardDetail, showCardDetail] = React.useState(false);

  const toggleCardDetail = () => {
    showCardDetail((prevState) => !prevState);
  };
  return (
    <Grid item>
      <Card sx={{ width: 345, height: 400 }} style={boxShadow}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src={hostDetail ? hostDetail.profile_image : null}
              variant="rounded"
            ></Avatar>
          }
          title={props.data.title}
          subheader={"Scheduled on " + props.data.date}
        />
        <CardMedia
          component="img"
          height="170"
          image={props.data.image}
          alt="Paella dish"
        />
        <CardContent sx={{ height: 100 }}>
          <Typography variant="body1" color="text.primary">
            {props.data.description.substr(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Typography variant="body2" color="text.primary">
            0 people Interested
          </Typography>
          <Tooltip title="See More About the Event">
            <Button
              sx={{ marginLeft: "30px", textAlignment: "center" }}
              onClick={toggleCardDetail}
              color="secondary"
              variant="contained"
            >
              <ArrowRightAltIcon />
            </Button>
          </Tooltip>
          {cardDetail && (
            <FullScreenDialog
              data={props.data}
              open={cardDetail}
              close={toggleCardDetail}
              hostName={hostDetail.first_name+" "+hostDetail.last_name}
            />
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
