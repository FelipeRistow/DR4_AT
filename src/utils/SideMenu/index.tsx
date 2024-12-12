import React from 'react';
import {isLoggedIn} from "../../services/auth";
import Container from "../../components/Container";
import Box from "../../components/Box";
import Avatar from "../../components/Avatar";
import {Button, Divider} from "@mui/material";
import Drawer from "../../components/Drawer";
import {To, useNavigate} from "react-router-dom";
import Typography from "../../components/Typography";

interface RouteItem {
    name?: string;
    icon?: React.ReactNode;
    path: string;
    element: React.ReactNode;
}

interface SideMenuProps {
    routes: Array<RouteItem>;
}

const SideMenu: React.FC<SideMenuProps> = ({routes})=> {
    const navigate = useNavigate();

    return (
        <Box sx={{
            width: 250,
            height: "100dvh",
        }}>
            <Drawer
                open={isLoggedIn()}
                hideBackdrop={true}
                sx={{
                    position: "relative",
                    width: "100px"
                }}
            >
                <Container sx={{
                    width: 250,
                    padding: "0 !important",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#1a1a1a",
                    color: "white"
                }}>
                    <Box sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "20px"
                    }}>
                        <Avatar
                            src={"data:image/png;base64,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"}
                            alt={"Usuário"}
                            onClick={() => navigate("/settings")}
                            sx={{
                                ":hover": {
                                    cursor: "pointer",
                                }
                            }}
                        />
                        <Typography variant="body2" sx={{
                            fontSize: 20
                        }}>
                            Meu bebê
                        </Typography>
                    </Box>
                    <Divider sx={{
                        width: "100%"
                    }}/>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: "15px",
                        width: "80%",
                    }}>
                        {
                            routes.map((route) => {
                                if (!route.name) return null
                                return <Button
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        columnGap: "15px",
                                        fontSize: "12px"
                                    }}
                                    variant="contained"
                                    onClick={() => {navigate(route.path)}}
                                >
                                    {route.icon}
                                    {route.name}
                                </Button>
                            })
                        }
                    </Box>
                </Container>
            </Drawer>
        </Box>
    );
}

export default SideMenu;
