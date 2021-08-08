import Image from "next/image";
import {
  Container,
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import Finance from "../../public/finance.svg";

function Header() {
  const resize = useMediaQuery("(max-width: 950px)");

  if (resize) {
    return (
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            bgcolor: "#5D3AB7",
            height: "550px",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            textAlign="center"
            justifyContent="center"
          >
            <Grid item xs={6} sm={10}>
              <Typography variant="h3">
                Democratizing Financial Education across Malaysia
              </Typography>

              <br />

              <Typography variant="subtitle1">
                Financial education rate is low in Malaysia. It is time for a
                change.
              </Typography>
            </Grid>

            <Grid item xs={5} sm={6}>
              <Image
                src={Finance}
                alt="Ticker image"
                width={750}
                height={450}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          bgcolor: "#5D3AB7",
          height: "550px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item md={5} lg={4} m={15}>
            <Typography variant="h3">
              Democratizing Financial Education across Malaysia
            </Typography>

            <br />

            <Typography variant="subtitle1">
              Financial education rate is low in Malaysia. It is time for a
              change.
            </Typography>
          </Grid>

          <Grid item md={4} lg={4} mt={10}>
            <Image src={Finance} alt="Ticker image" width={750} height={450} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Header;
