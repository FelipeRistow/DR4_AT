import React, {useEffect, useState} from 'react';
import Container from "../../components/Container";
import {useLocation, useNavigate} from "react-router-dom";
import Snackbar from "../../components/Snackbar";
import FeedingCard from "./Cards/FeedingCard";

const Dashboard: React.FC = () => {
    const {state} = useLocation();
    const [createSuccess, setCreateSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (state?.created) {
            setCreateSuccess(true);
        }
    }, []);

   const handleCloseSuccess = () => {
       setCreateSuccess(false);
   }

    return (
        <Container>
            <FeedingCard/>
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
