import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
import FullScreenDialog from "../../utils/FullScreenDialog";

const boxShadow = {
  boxShadow: "1px 2px 5px grey",
  borderRadius: "5px",
};

export default function EventCard(props) {
  const [cardDetail,showCardDetail] = React.useState(false);

  const toggleCardDetail = () =>{
    showCardDetail((prevState) => !prevState);
  }
  return (
    <Card sx={{ maxWidth: 345 }} style={boxShadow}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
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
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {props.data.description.substr(0,100)}...
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
          <Button sx={{marginLeft:"30px", textAlignment:"center"}} onClick={toggleCardDetail}color="secondary" variant="contained"> 
          <ArrowRightAltIcon />
          </Button>
        </Tooltip>
        {cardDetail && <FullScreenDialog data={props.data} open={cardDetail} close={toggleCardDetail}/>}
      </CardActions>
    </Card>
  );
}
