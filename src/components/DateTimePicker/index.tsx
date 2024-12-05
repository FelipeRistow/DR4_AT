import React from "react";
import {DateTimePicker, DateTimePickerProps} from "@mui/x-date-pickers";
import {Dayjs} from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

interface IDateTimePickerProps extends DateTimePickerProps<Dayjs> {
}

const DateTimePickerComponent: React.FC<IDateTimePickerProps> = ({...props}) => {
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker {...props}/>
    </LocalizationProvider>
}

export default DateTimePickerComponent;
