import Image from "next/image";
import {
  Container,
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import Typist from "react-typist";

function Header() {
  const resize = useMediaQuery("(max-width: 950px)");

  if (resize) {
    return (
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            bgcolor: "#0F0E17",
            height: "auto",
          }}
        >
          <Grid container textAlign="center" justifyContent="center">
            <Grid item sm={6} md={10} p={5}>
              <Typist>
                <Typography variant="h3" component="div">
                  Democratizing <span /> Financial Education Across Malaysia
                </Typography>

                <br />

                <Typography variant="subtitle1">
                  Financial education rate is low in Malaysia. It is time for a
                  change.
                </Typography>
              </Typist>
            </Grid>

            <Grid item sm={8}>
              <Image
                src="https://res.cloudinary.com/dfkd65uqz/image/upload/v1629786933/Shapes_skgi8a.png"
                alt="3D Shapes"
                width={950}
                height={830}
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
          bgcolor: "#0F0E17",
          height: "auto",
          display: "grid",
          columnGap: "2",
          gridTemplateColumns: "1fr",
        }}
      >
        <Grid container justifyContent="center" my={13}>
          <Grid item xs={2} md={5} p={2}>
            <Typist>
              <Typist.Delay ms={500} />
              <Typography variant="h1">
                Democratizing <span /> Financial Education Across Malaysia
              </Typography>

              <br />

              <Typography variant="subtitle1">
                Financial education rate is low in Malaysia. <span /> It is time
                for a change.
              </Typography>
            </Typist>
          </Grid>

          <Grid item md={4}>
            <Image
              src="https://res.cloudinary.com/dfkd65uqz/image/upload/v1629786933/Shapes_skgi8a.png"
              alt="3D Shapes"
              width={950}
              height={830}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Header;
