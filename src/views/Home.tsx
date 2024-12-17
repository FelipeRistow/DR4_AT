import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Container from "../components/Container";
import Card from "../components/Card";

const Home: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <Card sx={{
                width: "100%",
                height: "100%",
            }}>
                <p>Hoje é {dayjs().format("DD/MM/YYYY")}</p>
                <p>Você está aqui há {currentTime} segundos</p>
            </Card>
        </Container>
    );
};

export default Home;
