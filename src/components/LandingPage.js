import { Stack, Typography, Button } from "@mui/material";
import FullPage from "./FullPage";
import rock from "./images/therock.png";
import "../App.css"

const LandingPage = () => {
  return (
    <FullPage>
      <Stack
        id="home"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        mx={9}
        mt={5}
        mb={3}
      >
        <img src={rock} alt="the rock" width="400vw" className="therock"/>
        <Stack>
          <Typography
            variant="h2"
            className="landingHeading"
            sx={{ color: "#eff6e0", fontFamily: "Bungee, cursive" }}
          >
            Fitness Journey<br></br>
            Will Be A<br></br>
            <span style={{ color: "#124559" }}>Lifelong</span> Journey
          </Typography>
          <Typography
            variant="h6"
            mt={1}
            mb={2}
            sx={{ color: "#eff6e0", fontFamily: "Bungee, cursive" }}
          >
            | Starting from $20/month
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            className="landingButton"
            sx={{width: "15vw", color: "#eff6e0" }}
          >
            Become Member
          </Button>
        </Stack>
      </Stack>
    </FullPage>
  );
};

export default LandingPage;
