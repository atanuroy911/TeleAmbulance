import { Box, LinearProgress, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import './index.css';
import WrappedMap from "../../components/gMap/Map";
import config from "../../components/gMap/config";


const CurrentTrip = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: paths } = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/path');
  const { data: stops } = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/stops');
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.mapsKey}`;

  return (
    <>
      <Box m="20px">
        <Header
          title="Current Trip"
          subtitle="You will find the details of current trip here"
        />
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 8"
            gridRow="span 12"
            backgroundColor={colors.primary[400]}
            height= '640px'
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  From CS Building
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.blueAccent[500]}
                >
                  To Health Center
                </Typography>
                
              </Box>
              
            </Box>
            <>
                {paths && stops ?
                  <WrappedMap
                    paths={paths}
                    stops={stops}
                    googleMapURL={mapURL}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className='mapContainer' />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                  :
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box>
                }
              </>

          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Patient Details
              </Typography>
              
            </Box>
            <Box
            p="15px"
            >
                <Typography
                  color={colors.blueAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  Name: John Doe
                </Typography>
                <Typography color={colors.grey[100]}>
                  Age: 24
                </Typography>
              </Box>

          </Box>
        </Box>
      </Box>

    </>


  );
};

export default CurrentTrip;