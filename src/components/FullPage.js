import { Box, Stack } from "@mui/material";

const FullPage = ({ children }) => {
  return (
    <Box className="fullpage">
      <Stack>{children}</Stack>
    </Box>
  );
};

export default FullPage;
