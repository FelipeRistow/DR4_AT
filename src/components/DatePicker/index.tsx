import React from "react";
import {DatePicker, DatePickerProps} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

interface IDatePickerProps extends DatePickerProps<Dayjs> {
    props: any;
}

const DatePickerComponent: React.FC<IDatePickerProps> = ({...props}) => {
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker {...props}/>
    </LocalizationProvider>
}

export default DatePickerComponent;