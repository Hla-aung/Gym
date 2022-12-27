import { useFormik } from "formik";
import * as Yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FullPage from "./FullPage";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      comment: "",
    },
    onSubmit: (values) => {
        return (
            alert(JSON.stringify(values, null, 2)), 
            formik.resetForm()
    )},
    validationSchema: Yup.object({
      fname: Yup.string().required("Required"),
      lname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });
  return (
    <FullPage>
      <Stack mx={9} m={3}>
        <Typography
            id="contact"
          variant="h3"
          sx={{ color: "#eff6e0", fontFamily: "Bungee, cursive" }}
        >
          Contact Us
        </Typography>
        <Box
          mx="auto"
          mt={5}
          width="50vw"
          p={5}
          sx={{ backgroundColor: "#124559" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <Stack mt={3}>
              <FormControl sx={{ paddingBottom: "20px" }}>
                <TextField
                  id="fname"
                  name="fname"
                  label="First Name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.fname}
                ></TextField>
                <FormHelperText>{formik.errors.fname}</FormHelperText>
              </FormControl>
              <FormControl sx={{ paddingBottom: "20px" }}>
                <TextField
                  id="lname"
                  name="lname"
                  label="Last Name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.lname}
                ></TextField>
                <FormHelperText>{formik.errors.lname}</FormHelperText>
              </FormControl>
              <FormControl sx={{ paddingBottom: "20px" }}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                ></TextField>
                <FormHelperText>{formik.errors.email}</FormHelperText>
              </FormControl>
              <FormControl sx={{ paddingBottom: "20px" }}>
                <TextField
                  id="comment"
                  name="comment"
                  label="Comment"
                  variant="filled"
                  multiline
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                ></TextField>
                <FormHelperText>{formik.errors.comment}</FormHelperText>
              </FormControl>
              <Button
                variant="contained"
                sx={{ margin: "10px auto", width: "10vw" }}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </FullPage>
  );
};

export default ContactUs;
