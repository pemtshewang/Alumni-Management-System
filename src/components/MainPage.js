import JumbotronDisplay from "./home/Jumbotron";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
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
      <div class="arrow bounce" id="down">
        <a href="#down"><KeyboardDoubleArrowDownIcon  sx={{fontSize:"90px"}}/></a>
      </div>
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
            sx={{ display: "flex", justifyContent: "center", mb: 5 }}
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
          What They Say About CST and its Students
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
                  <Typography variant="body2" component="p" sx={{fontFamily:"Consolas"}}>
                   <i> For four years, CST has been a home to me. It had helped me in every way possible to become the person I am today. I am grateful to have been a part of this institution and I am proud to be a CSTian.</i>
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
                  src={venkatsan}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>S. Venkatsan</Card.Title>
                <Card.Text>
                  <br />
                  <Typography variant="body2" component="p" sx={{fontFamily:"Consolas"}}>
                    <i>"We have always appreciated the talents and the sheer potential of our CSTians and I am still appreciating</i>
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
                  src={dasho}
                  sx={{ width: 100, height: 100 }}
                />
              </Card.Header>
              <Card.Body>
                <Card.Title>Dasho Nidup Dorji</Card.Title>
                <Card.Text>
                  <br />
                  <Typography variant="body2" component="b" sx={{fontFamily:"Consolas"}}>
                    <i>CST has had always renowned for its quality education and the students are always well prepared for the challenges of the future. I am confident that the students of CST will continue to excel in their respective fields.</i>
                  </Typography>
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid2>
          <div className="navButton">
            <Button
              variant="outlined"
              className="btnAlumni"
              onClick={() => navigate("/alumni")}
            >
              Get to Know More of Our Alumni
            </Button>
          </div>
        </Grid2>
      </Parallax>
      <Parallax speed={-10} translateY={10}>
        <Grid2 sx={{mb:5}}>
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
                <h6>From Now</h6>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Button variant="primary" href="/events">Take Your Part</Button>
              </Card.Footer>
            </Card>
          </Grid2>
        </Grid2>
      </Parallax>
    </ParallaxProvider>
  );
}
export default MainPage;
