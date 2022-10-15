import JumbotronDisplay from "./home/Jumbotron";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
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

const Clock = (props) => {
  const [date, setDate] = React.useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <Typography variant="h4" component="h2" color="black">
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
    <ParallaxProvider>
      <Parallax speed={-5}>
        <div>
          <JumbotronDisplay />
        </div>
      </Parallax>
      <div>
        <Parallax
          speed={10}
          style={{
            paddingTop: "50px",
          }}
        >
          <Grid
            className="slow"
            container
            rowSpacing={1}
            coloumns={10}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid xs={4}>
              <paper elevation={3}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Consolas, sans-serif",
                    fontSize: "1.75rem !important",
                    lineHeight: "50px",
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
        </Parallax>
      </div>
      <Parallax speed={-10} translateY={[-8, -14]}>
        <Typography
          sx={{ textAlign: "center", fontFamily: "consolas" }}
          marginBottom="35px"
          variant="h4"
          component="h2"
          color="black"
        >
          Popular Cstian Alumni
        </Typography>
        <Grid2 container coloumns={12} sx={{ margin: "0 auto" }}>
          <Grid2 item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card border="dark" style={{ width: "18rem" }}>
              <Card.Header style={{ margin: "0 auto" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={thrompon}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>Ugyen Dorji</Card.Title>
                <Card.Text>
                    <br />
                  <Typography variant="body2" component="p">
                    Thrompon Ugyen Dorji is a new elected Thimphu Thrompon for
                    2022.
                    He is Alumni who pursued BE Civil Engineering
                  </Typography>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid2>
          <Grid2 item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card border="dark" style={{ width: "18rem" }}>
              <Card.Header style={{ margin: "0 auto" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={thrompon}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>Ugyen Dorji</Card.Title>
                <Card.Text>
                    <br />
                  <Typography variant="body2" component="p">
                    Thrompon Ugyen Dorji is a new elected Thimphu Thrompon for
                    2022.
                    He is Alumni who pursued BE Civil Engineering
                  </Typography>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid2>
          <Grid2 item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card border="dark" style={{ width: "18rem" }}>
              <Card.Header style={{ margin: "0 auto" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={thrompon}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>Ugyen Dorji</Card.Title>
                <Card.Text>
                    <br />
                  <Typography variant="body2" component="p">
                    Thrompon Ugyen Dorji is a new elected Thimphu Thrompon for
                    2022.
                    He is Alumni who pursued BE Civil Engineering
                  </Typography>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid2>
          <div className="navButton">
                <Button variant="outlined" className="btnAlumni" onClick={()=>navigate("/alumni")}>Get to Know More of Our Alumni</Button>
          </div>
        </Grid2>
      </Parallax>
      <Parallax speed={-10} translateY={10}>
        <Grid2>
          <Grid2
            item
            xs={12}
            justifyContent="center"
            sx={{ display: "flex", padding: "30px" }}
          >
            <Card
              className="text-center"
              style={{
                width: "800px",
                border: "3px solid black",
              }}
            >
              <Card.Header>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "consolas" }}
                  component="h2"
                  color="black"
                >
                  Featured Event
                </Typography>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "consolas" }}
                    component="h2"
                    color="black"
                  >
                    The Alumni Fest
                  </Typography>
                </Card.Title>
                <Card.Text>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "consolas" }}
                    component="h6"
                    color="black"
                  >
                    The Annual Fest for Alumni is on the way
                  </Typography>
                </Card.Text>
                <Clock />
              </Card.Body>
              <Card.Footer className="text-muted">
                <Button variant="primary">Find More Events</Button>
              </Card.Footer>
            </Card>
          </Grid2>
        </Grid2>
      </Parallax>
    </ParallaxProvider>
  );
}
export default MainPage;
