import JumbotronDisplay from "./home/Jumbotron";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import Card from "react-bootstrap/Card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Avatar from "@mui/material/Avatar";
import thrompon from "../assests/thrompon.jpg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import venkatsan from "../assests/venkatesan.jpg";
import dasho from "../assests/dasho.jpg";
import Box from "@mui/material/Box";

const Clock = (props) => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    //Setting up a timer that counts for the duration of the event
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <Typography variant="h4" component="h2" color="white">
      {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </Typography>
  );
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
  {
    img: "https://www.cst.edu.bt/images/files/2019/eyantraworkshop.jpg",
    title: "Burger",
    rows: 2,
  },
  {
    img: "https://www.cst.edu.bt/images/files/2020/cstmasscleaning1.jpg",
    title: "Camera",
  },
  {
    img: "https://cst.edu.bt/images/ProgrammePics/renewableenergy.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://cst.edu.bt/images/ProgrammePics/ise-556x312.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://cst.edu.bt/images/Campus/cstcampus2.jpg",
    rows: 2,
    cols: 2,
  },
  {
    img: "http://www.fablab.bt/wp-content/uploads/cst-fablab-bhutan.jpg",
    title: "Basketball",
  },
];

function MainPage() {
  const navigate = useNavigate();
  return (
      <>
        <div>
          <JumbotronDisplay />
        </div>
      <div class="arrow bounce" id="down">
        <a href="#down"><KeyboardDoubleArrowDownIcon  sx={{fontSize:"90px"}}/></a>
      </div>
      <div class="intro-page">
          <Grid
            className="slow"
            container
            rowSpacing={1}
            coloumns={10}
            sx={{ display: "flex", justifyContent: "center", 
            background:"linear-gradient(to right, #000, #000)"
            }}
            padding={9}
            paddingTop={12}

          >
            <Grid xs={4}>
              <paper elevation={3}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "helvitica, sans-serif",
                    fontSize: "1.75rem !important",
                    lineHeight: "50px",
                    color:"white"
                  }}
                  component="h2"
                  color="black"
                  paddingRight={5}
                  gutterBottom
                >
                  "In the long history of humankind (and animal kind, too) those
                  who learned to collaborate and improvise most effectively have
                  prevailed."
                  <br />
                  <i>- Charles Darwin</i>
                </Typography>
              </paper>
            </Grid>
            <Grid xs={6}>
              <ImageList sx={{ height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img} spacing={1}>
                    <img
                      {...srcset(item.img, 100, item.rows, item.cols)}
                      alt={item.title}
                      style={{ objectFit: "cover", borderRadius: "10px" }}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
      </div>
      <Box 
      sx={{
            background:"linear-gradient(to left, #fff, #fff)"
      }}>
        <Typography
          sx={{ textAlign: "left", 
          fontFamily: "Helvitica",
          }}
          marginBottom="50px"
          paddingLeft={10}
          paddingTop={5}
          variant="h4"
          component="h2"
          color="black"
        >
          Thoughts from our renown individuals
        </Typography>
        <Grid2 container coloumns={12} sx={{ margin: "0 auto" }}>
          <Grid2 item xs={4} sx={{ display: "flex", justifyContent: "center",color:"black"}}>
            <Card style={{ width: "20rem" , background:"inherit", border:"4px solid black"}}>
              <Card.Header style={{ margin: "0 auto" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={thrompon}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title style={{textAlign:"center", fontFamily:"helvitica", fontSize:25}}>Ugyen Dorji</Card.Title>
                <Card.Text>
                  <br />
                  <Typography variant="body2" component="p" sx={{fontFamily:"helvitica",fontSize:20}}>
                   <i> For four years, CST has been a home to me. It had helped me in every way possible to become the person I am today. I am grateful to have been a part of this institution and I am proud to be a CSTian.</i>
                  </Typography>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid2>
          <Grid2 item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: "20rem", background:"inherit",color:"black", border:"4px solid black"}}>
              <Card.Header style={{ margin: "0 auto" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={venkatsan}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title style={{textAlign:"center", fontFamily:"helvitica", fontSize:25}}>S. Venkatsan</Card.Title>
                <Card.Text>
                  <br />
                  <Typography variant="body2" component="p" sx={{fontFamily:"helvitica",fontSize:20}}>
                    <i>We have always appreciated the talents and the sheer potential of our CSTians and I am still appreciating</i>
                  </Typography>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid2>
          <Grid2 item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ color:"black", width: "20rem", background:"inherit", border:"4px solid black" }}>
              <Card.Header style={{ margin: "0 auto" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={dasho}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title style={{textAlign:"center", fontFamily:"helvitica", fontSize:25}}>Dasho Nidup Dorji</Card.Title>
                <Card.Text>
                  <br />
                  <Typography variant="body2" component="p" sx={{fontFamily:"helvitica",fontSize:20}}>
                   <i> CST has had always renowned for its quality education and the students are always well prepared for the challenges of the future. I am confident that the students of CST will continue to excel in their respective fields.</i>
                  </Typography>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid2>
          <div className="navButton">
            <Button
              variant="contained"
              className="btnAlumni"
              onClick={() => navigate("/alumni")}
            >
              Get to Know More of Our Alumni
            </Button>
          </div>
        </Grid2>
      </Box>
        <Grid2 >
          <Grid2
            item
            xs={12}
            justifyContent="center"
            sx={{ display: "flex", padding: "30px",
            background: "linear-gradient(#000, #000)" }}
          >
            <Card
              className="text-center"
              style={{
                width: "800px",
                border: "3px solid white",
                background: "inherit",
                color:"white"
              }}
            >
              <Card.Header >
                <Typography
                  variant="h4"
                  sx={{ color:"white", fontFamily:"helvitica", }}
                  component="h2"
                  color="white"
                >
                  Featured Event
                </Typography>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <Typography
                    variant="h5"
                    component="h2"
                    color="white"
                    sx={{ fontFamily:"helvitica", fontSize:25 }}
                  >
                    The Alumni Fest
                  </Typography>
                </Card.Title>
                <Card.Text>
                  <Typography
                    variant="h6"
                    component="h6"
                    color="white"
                    sx={{ fontFamily:"helvitica", fontSize:23 }}
                  >
                    The Annual Fest for Alumni is on the way
                  </Typography>
                </Card.Text>
                <Clock />
                <h6 style={{fontFamily:"helvitica"}}>From Now</h6>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Button variant="primary" href="/events">Take Your Part</Button>
              </Card.Footer>
            </Card>
          </Grid2>
        </Grid2>
    </>
  );
}
export default MainPage;
