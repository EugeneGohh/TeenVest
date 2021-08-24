import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  CardActions,
  CardContent,
  Card,
  Button,
  CardMedia,
} from "@material-ui/core";

const marketCard = (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 320 }}
      image="https://res.cloudinary.com/dfkd65uqz/image/upload/v1629163214/Bear_market-amico_hkjxv5.png"
      title="Market"
    />
    <CardContent>
      <Typography gutterBottom variant="h5">
        Market
      </Typography>
      <Typography variant="body2" color="primary">
        Market for open for everyone under parents provision.
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
      <Typography gutterBottom variant="h5">
        Courses
      </Typography>
      <Typography variant="body2" color="primary">
        An investment in knowledge pays the best interest. Keep chasing your
        ROI.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
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
            <Typography variant="h3" color="primary">Catalog</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 10 }}
          py={3}
        >
          <Grid item>
            <Card>{marketCard}</Card>
          </Grid>

          <Grid item>
            <Card>{coursesCard}</Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Catalog;
