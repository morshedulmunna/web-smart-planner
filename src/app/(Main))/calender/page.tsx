"use client";

import moment from "moment";
import { type FC } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
export default page;
