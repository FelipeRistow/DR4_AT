import React from 'react';
import BaseCard from "./BaseCard";

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

function FeedingCard() {

    const [value, setValue] = React.useState<string>();

    return (
        <BaseCard
            title="Alimentação"
            onChangeOption={(value) => console.log(value)}
        />
    );
}

export default FeedingCard;