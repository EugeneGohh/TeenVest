import React from "react";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Zoom from "react-reveal/Zoom";

const marketCard = (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 320 }}
      image="https://res.cloudinary.com/dfkd65uqz/image/upload/v1629163214/Bear_market-amico_hkjxv5.png"
      title="Market"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary" textAlign="left">
        Market
      </Typography>
      <Typography variant="body2" color="primary" textAlign="left">
        Using a virtual market to teach kids how to invest.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

const coursesCard = (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 320 }}
      image="https://res.cloudinary.com/dfkd65uqz/image/upload/v1629163719/Book_lover-pana_hka1gp.png"
      title="Courses"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" color="primary" textAlign="left">
        Courses
      </Typography>
      <Typography variant="body2" color="primary" textAlign="left">
        The highest return on investment is knowledge. Keep chasing your return
        on investment.
      </Typography>
    </CardContent>
    <CardActions>
      <Link href="/course/courses">
        <Button size="small">Learn More</Button>
      </Link>
    </CardActions>
  </Card>
);

function Catalog() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "auto",
          display: "grid",
          columnGap: "1",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item py={5}>
            <Typography variant="h3" color="primary">
              Catalog
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 10 }}
          p={2}
        >
          <Grid item>
            <Zoom top>
              <Card>{marketCard}</Card>
            </Zoom>
          </Grid>

          <Grid item>
            <Zoom top>
              <Card>{coursesCard}</Card>
            </Zoom>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Catalog;
