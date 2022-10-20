import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Typography from "@mui/material/Typography";


function SpecialEvent(props) {
  return (
    <Card>
      <Card.Header>
        <Typography variant="h5" component="div">
          Featured event
        </Typography>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.data.length>0?
        props.data[0].title: "No Special Event"}</Card.Title>
        <Card.Text>
          {props.data.length > 0?
          props.data[0].description: "No Special Event, Create One"}
        </Card.Text>
        <IconButton aria-label="add to favorites">
          <StarIcon />
        </IconButton>
      </Card.Body>
    </Card>
  );
}

export default SpecialEvent;