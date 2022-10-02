import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';



function SpecialEvent() {
  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <IconButton aria-label="add to favorites">
          <StarIcon />
        </IconButton>
      </Card.Body>
    </Card>
  );
}

export default SpecialEvent;