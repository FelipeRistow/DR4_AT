import React, {useState} from 'react';
import dayjs, {Dayjs} from "dayjs";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const Form: React.FC = () => {
    const [diaperChangeTime, setDiaperChangeTime] = useState<Dayjs>(dayjs());
    const [diaperSituation, setDiaperSituation] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Formulário</h2>
            <FormControl onSubmit={handleSubmit}>
                <InputLabel id={'diaper-situation'}>Situação da fralda</InputLabel>
                <Select
                    labelId={'diaper-situation'}
                    label="Age"
                    value={diaperSituation}
                    onChange={(e) => setDiaperSituation(e.target.value)}
                >
                    <MenuItem value={"POOR"}>Ruim</MenuItem>
                    <MenuItem value={"ACCEPTABLE"}>Aceitável</MenuItem>
                    <MenuItem value={"GOOD"}>Boa</MenuItem>
                </Select>
                <div style={{height: 50}}></div>
                <label id={'diaper-change-time'}>Trocada em</label>
                <DateTimePicker
                    labelId={'diaper-change-time'}
                    value={diaperChangeTime}
                    onChange={(e) => setDiaperChangeTime(e.target.value)}
                />
                <Button type={"submit"}>SALVAR</Button>
            </FormControl>
        </div>
    );
};

export default Form;
