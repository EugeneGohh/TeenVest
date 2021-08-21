import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  InputBase,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { AiFillFacebook, AiFillGithub, AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#AE96EC",
          height: "100%",
          display: "grid",
          columnGap: "1",
        }}
      >
        <Grid container p={8} spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography variant="h6">TeenVest</Typography>
            <Typography variant="subtitle2">
              Democratizing financial education
              <br />
              at scale.
            </Typography>

            <Grid item p={0} m={0}>
              <Button href="#" color="secondary">
                <AiFillFacebook size={40} />
              </Button>

              <Button href="#" color="secondary">
                <AiFillYoutube size={40} />
              </Button>

              <Button href="#" color="secondary">
                <AiFillGithub size={40} />
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <Typography variant="h6">Subscribe to newsletter?</Typography>

            <br />

            <TextField
              label="Email"
              id="fullWidth"
              placeholder="email@example.com"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <MailOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Footer;
