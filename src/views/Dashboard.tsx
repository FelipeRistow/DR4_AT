import React, { useState } from 'react';

const Dashboard: React.FC = () => {
   const [diapersChanged, setDiapersChanged] = useState(0);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{diapersChanged} fraldas trocadas</p>
        </div>
    );
};

export default Dashboard;
