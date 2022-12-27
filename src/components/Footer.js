import { Box, Stack, Typography } from "@mui/material";
import logo from "./images/gymlogo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30vh",
        backgroundColor: "#124559",
        margin: "0 auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mx={5}
      >
        <Stack my={3}>
          <img src={logo} alt="logo" width={200} className="footerlogo"/>
          <Stack direction="row" justifyContent="space-evenly" className="link">
            <a href="#terms" style={{ color: "grey", fontSize: "14px" }}>
              Terms & Conditions
            </a>
            <a href="#privacy" style={{ color: "grey", fontSize: "14px" }}>
              Privacy
            </a>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Stack>
            <Typography variant="h6">Address</Typography>
            <Typography variant="body 2">
              112, Mahar Road, Yangon <br></br>
              Myanmar, 08011
            </Typography>
          </Stack>
          <Stack ml={3}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body 2">
              <PhoneIcon fontSize="small" /> +959795799397 <br></br>
              <EmailIcon fontSize="small" /> chindwin.98@gmail.com <br></br>
              <FacebookIcon fontSize="small" /> The Beats
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
