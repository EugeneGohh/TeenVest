import Image from "next/image";
import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

function Footer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#0F0E17",
          height: "auto",
          display: "grid",
          columnGap: "1",
        }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Grid item p={18}>
              <Typography variant="h3">
                It's time to start
                <br /> investing in yourself.
              </Typography>

              <Typography variant="subtitle1">
                Why? Financial literacy is critical, <br />
                yet it is not taught in today's educational system.
              </Typography>

              <br />

              <Button variant="contained" color="secondary">
                Take a test?
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={8} sm={8}>
            <Image
              src=""
              alt="3D Shapes"
              width={650}
              height={750}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Footer;
