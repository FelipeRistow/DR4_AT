import React, {useEffect, useState} from 'react';
import Avatar from "../components/Avatar";
import Box from "../components/Box";
import Card from "../components/Card";
import Container from "../components/Container";
import Fab from "../components/Fab";
import {FaPlus} from "react-icons/fa"
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import IconButton from "../components/IconButton";
import Snackbar from "../components/Snackbar";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";
import Typography from "../components/Typography";

const fabStyle = {
    alignSelf: "flex-end",
    position: "relative",
    right: 10,
    bottom: 10,
};

const tabs = [
    {
        name: "hoje",
    },
    {
        name: "essa semana"
    },
    {
        name: "esse mês"
    }
]

const Dashboard: React.FC = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [diapersChanged, setDiapersChanged] = useState<number>(0);
    const [createSuccess, setCreateSuccess] = useState<boolean>(false);
    const [tabSelected, setTabSelected] = useState<number>(0);

    useEffect(() => {
        if (state?.created) {
            setCreateSuccess(true);
        }
    }, []);

   const handleCloseSuccess = () => {
       setCreateSuccess(false);
   }

   const handleSelectTab = (event: React.SyntheticEvent, tabIndex: number) => {
       setTabSelected(tabIndex);
   }

    return (
        <Container>
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 15
            }}>
                <Card sx={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography variant={"h3"}>
                        Fraldas Trocadas
                    </Typography>
                    <Tabs
                        value={tabSelected}
                        onChange={handleSelectTab}
                    >
                        { tabs.map((tab, index) => (
                            <Tab
                                label={tab.name}
                            />
                        ))}
                    </Tabs>
                    <p>{diapersChanged} fraldas trocadas {tabs[tabSelected].name}</p>
                    <Fab sx={fabStyle}>
                        <IconButton onClick={() => {
                            navigate("/form");
                        }}>
                            <FaPlus/>
                        </IconButton>
                    </Fab>
                </Card>
                <Card sx={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography variant={"h3"}>
                        Fraldas Trocadas
                    </Typography>
                    <Tabs
                        value={tabSelected}
                        onChange={handleSelectTab}
                    >
                        { tabs.map((tab, index) => (
                            <Tab
                                label={tab.name}
                            />
                        ))}
                    </Tabs>
                    <p>{diapersChanged} fraldas trocadas {tabs[tabSelected].name}</p>
                    <Fab sx={fabStyle}>
                        <IconButton onClick={() => {
                            navigate("/form");
                        }}>
                            <FaPlus/>
                        </IconButton>
                    </Fab>
                </Card>
            </Box>
            <Snackbar
                open={createSuccess}
                autoHideDuration={3000}
                message={"Troca de fralda criada com sucesso"}
                onClose={handleCloseSuccess}
            />
        </Container>
    );
};

export default Dashboard;
