import React from "react";
import { Container, Box, Grid, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Section() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "550px",
          display: "grid",
          columnGap: "2",
          gridTemplateColumns: "1fr",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs container direction="column">
            <Grid item xs>
              <Item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Market
                </Typography>

                <Typography variant="body2" gutterBottom>
                  Market for open for everyone
                  <br /> under parents provision.
                </Typography>
              </Item>
            </Grid>

            <Grid item xs>
              <Item>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Courses
                </Typography>

                <Typography variant="body2" gutterBottom>
                  Helping you to gain the right
                  <br />
                  knowledge you need in life.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Section;
