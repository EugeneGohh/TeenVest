import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import { Container, Grid, Paper, Box, Typography } from "@material-ui/core";
const ticker = require("../../public/ticker.svg");

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Body() {
  return (
    <div>
      <Container maxWidth="xl" disableGutters>
        <Box sx={{ bgcolor: "#5D3AB7", height: "93vh" }}>
          <Grid container rowSpacing={1} columnSpacing={50}>
            <Grid item xs={6}>
              <Typography variant="h3">
                Democratizing Financial Education across Malaysia
              </Typography>
              <Typography variant="subtitle1">
                Financial education rate is low in Malaysia. It is time for a
                change.
              </Typography>
            </Grid>

            <br />

            <Grid item xs={6} md={5}>
              <Image
                src={ticker} // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={250} // Desired size with correct aspect ratio
                quality={100}
                placeholder="empty"
                alt="Ticker"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Body;
