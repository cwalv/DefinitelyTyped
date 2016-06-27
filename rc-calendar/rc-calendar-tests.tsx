/// <reference path="rc-calendar.d.ts" />

import Calendar = require("rc-calendar");
import MonthCalendar = require("rc-calendar/lib/MonthCalendar");
import DatePicker = require("rc-calendar/lib/Picker");

export const TestSFC = (props: any) => {

    let calendarContainer: Node;

    const monthOnly = !!props.monthOnly;

    const cal = monthOnly ?
        <MonthCalendar
            showDateInput={false}
            {...props.calendarProps} /> :
        <Calendar
            showDateInput={false}
            {...props.calendarProps} />;

    const getInput = ({value}) => {
        return <input  />;
    };

    const picker = <DatePicker
            calendar={cal} getCalendarContainer={() => calendarContainer}
            placement="bottomRight" animation="slide-up" {...props.pickerProps}>
            {getInput}
        </DatePicker>;

    return <div ref={(r) => calendarContainer = r}>
            {picker}
        </div>;
}