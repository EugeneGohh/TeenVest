import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import NavBar from "../../components/core/NavBar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function courses() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "auto",
        }}
      >
        <NavBar />

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item py={5}>
            <Typography variant="h3" color="primary">
              Courses
            </Typography>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Array.from(Array(6)).map((index) => (
            <Grid item xs={6} key={index} py={5}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default courses;
