import React, {useState} from 'react';
import Typography from "../../../components/Typography";
import Tabs from "../../../components/Tabs";
import Tab from "../../../components/Tab";
import Fab from "../../../components/Fab";
import IconButton from "../../../components/IconButton";
import {FaPlus} from "react-icons/fa";
import Card from "../../../components/Card";
import {useNavigate} from "react-router-dom";

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

const fabStyle = {
    alignSelf: "flex-end",
    position: "relative",
    right: 10,
    bottom: 10,
};

function BaseCard({title}: {title: string}) {
    const navigate = useNavigate();
    const [tabSelected, setTabSelected] = useState<number>(0);

    const handleSelectTab = (event: React.SyntheticEvent, tabIndex: number) => {
        setTabSelected(tabIndex);
    }

    return (
        <Card sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
        }}>
            <Typography variant={"h3"}>
                {title}
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
            <p>Fraldas trocadas {tabs[tabSelected].name}</p>
            <Fab sx={fabStyle}>
                <IconButton onClick={() => {
                    navigate("/form");
                }}>
                    <FaPlus/>
                </IconButton>
            </Fab>
        </Card>
    );
}

export default BaseCard;