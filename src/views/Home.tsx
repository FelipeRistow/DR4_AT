import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(0);

    setInterval(() => setCurrentTime(currentTime + 1), 1000);

    return (
        <div>
            Você está aqui há {currentTime} segundos
        </div>
    );
};

export default Home;
