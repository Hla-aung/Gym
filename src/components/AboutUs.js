import { Stack, Typography, Button } from "@mui/material";
import girl from "./images/girl.png";
import FullPage from "./FullPage";
import '../App.css'

const AboutUs = () => {
  return (
    <FullPage>
      <Stack
        id="about"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mx={9}
        mt={3}
        mb={3}
      >
        <Stack>
          <Typography
            variant="h3"
            sx={{ color: "#eff6e0", fontFamily: "Bungee, cursive" }}
          >
            <span style={{ color: "#124559" }}>10 years of experience</span>{" "}
            <br></br>in Fitness
          </Typography>
          <Typography sx={{ color: "#aec3b0" }} mx={1} my={1}>
            At The Beats, you'll make as many friends as the calories you burn.
            That's a lot of friends.
          </Typography>
          <Typography sx={{ color: "#aec3b0" }} mx={1} mb={3}>
            Whether you're not seeing the results you're aiming for, need a
            little “push,” or want to perfect your form for maximum results, our
            personal trainers are here to help! Together, you'll set up a
            personalized program and get the additional support you need. Trust
            us; our personal trainers count on the tools, tips, and expertise to
            help you get to where you want to be.
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ width: "15vw", color: "#eff6e0" }}
          >
            Join Now
          </Button>
        </Stack>
        <img src={girl} alt="girl" width="350vw" className="gymgirl"></img>
      </Stack>
    </FullPage>
  );
};

export default AboutUs;
