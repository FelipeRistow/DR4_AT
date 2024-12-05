import React, { useState, useEffect } from 'react';
import Grid from "../components/Grid";
import dayjs from "dayjs";

const Home: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(0);

    setInterval(() => setCurrentTime(currentTime + 1), 1000);

    return (
        <Grid>
            <p>Hoje é {dayjs().format("DD/MM/YYYY")}</p>
            <p>Você está aqui há {currentTime} segundos</p>
        </Grid>
    );
};

export default Home;
