"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);

const sessionAppointment = (props) => {
  const myEventsList = [
    {
      title: "Meeting",
      start: new Date(),
      end: new Date(moment().add(1, "hour").toDate()),
    },
  ];

  // const [expert, setExpert] = useState([]);

  // useEffect(() => {
  //   const allExpert = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/all`
  //       );
  //       console.log(response.data.data);
  //       if (response) {
  //         setExperts(response.data.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   allExpert();
  // }, []);


  const [view, setView] = useState(Views.MONTH);

  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container ">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        view={view}
        onView={(newView) => setView(newView)}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
      />
    </div>
  );
};

export default sessionAppointment;
