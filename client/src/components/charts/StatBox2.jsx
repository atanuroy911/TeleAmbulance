import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "../ProgressCircle";

const StatBox2 = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.blueAccent[500] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          {icon}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h4" sx={{ color: colors.white }}>
          {subtitle}
        </Typography>
        {/* <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.blueAccent[600] }}
        >
          {increase}
        </Typography> */}
      </Box>
    </Box>
  );
};

export default StatBox2;
