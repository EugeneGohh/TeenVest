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
          <Grid container textAlign="center" justifyContent="center">
            <Grid item sm={6} md={10}>
              <Typography variant="h3">
                Democratizing Financial Education across Malaysia
              </Typography>

              <br />

              <Typography variant="subtitle1">
                Financial education rate is low in Malaysia. It is time for a
                change.
              </Typography>
            </Grid>

            <Grid item sm={8}>
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
          display: "grid",
          columnGap: "2",
          gridTemplateColumns: "1fr",
        }}
      >
        <Grid container justifyContent="center" my={12}>
          <Grid item xs={2} md={5} py={6}>
            <Typography variant="h3">
              Democratizing Financial Education across Malaysia
            </Typography>

            <br />

            <Typography variant="subtitle1">
              Financial education rate is low in Malaysia. It is time for a
              change.
            </Typography>
          </Grid>

          <Grid item md={4} py={2}>
            <Image src={Finance} alt="Ticker image" width={750} height={450} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Header;
