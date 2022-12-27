import { Box, Stack } from "@mui/material";
import logo from "./images/gymlogo.png";
import "../App.css";

const Heading = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
      position="sticky"
      top={0}
      left={0}
      right={0}
      className="heading"
      sx={{
        width: "100%",
        height: "10vh",
        backgroundColor: "#124559",
        margin: "0 auto",
        zIndex: "2",
        transitionProperty: "transform",
        transitionDuration: "0.3s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <Stack
        direction="row"
        px={5}
        justifyContent="space-between"
        alignItems="center"
      >
        <nav>
          <img src={logo} alt="logo" width="100vw" height="auto" className="headingimg"/>
        </nav>
        <nav>
          <Stack direction="row" spacing={2.5}>
            <a href="#home" onClick={handleClick("home")}>
              Home
            </a>
            <a href="#about" onClick={handleClick("about")}>
              About Us
            </a>
            <a href="#package" onClick={handleClick("package")}>
              Programmes
            </a>
            <a href="#contact" onClick={handleClick("contact")}>
              Contact
            </a>
          </Stack>
        </nav>
      </Stack>
    </Box>
  );
};

export default Heading;
