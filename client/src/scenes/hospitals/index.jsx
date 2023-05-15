import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import AddIcon from '@mui/icons-material/Add';
import Header from "../../components/Header";
import StatBox from "../../components/charts/StatBox";
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import { ArrowForward, LocalHospital, LocalShipping, MedicalServices } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import StatBox2 from "../../components/charts/StatBox2";
import CollapsibleTable from "../../components/tables/TableGen";

const HospitalPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Hospitals" subtitle="Here you will find all the available hospitals" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <AddIcon sx={{ mr: "10px" }} />
                        Add Hospital
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox2
                        title="Total Hospitals"
                        subtitle="2 Nearby"
                        progress="0.50"
                        increase="2/4 Open"
                        icon={
                            <LocalHospital
                                sx={{ color: colors.blueAccent[600], fontSize: "34px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox2
                        title="Ready to Receive"
                        subtitle="1 Ready"
                        progress="1"
                        increase="2/4 Ready"
                        icon={
                            <MedicalServices
                                sx={{ color: colors.blueAccent[600], fontSize: "34px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox2
                        title="Ambulance ready"
                        subtitle="1 Ready to dispatch"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <LocalShipping
                                sx={{ color: colors.blueAccent[600], fontSize: "30px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox2
                        title="Capacity Full"
                        subtitle="0 Full"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <AirlineSeatIndividualSuiteIcon
                                sx={{ color: colors.blueAccent[600], fontSize: "34px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn="span 12"
                    gridRow="span 4"
                    backgroundColor={colors.primary[400]}
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
                                List of Hospitals
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.blueAccent[500]}
                            >
                                <>2 Hospitals Available</>
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                    p = "30px"
                    >
                    </Box>

                </Box>


                {/* ROW 3 */}

            </Box>
        </Box>
    );
};

export default HospitalPage;