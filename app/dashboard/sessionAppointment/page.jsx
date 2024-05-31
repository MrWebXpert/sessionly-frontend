"use client";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);

const SessionAppointment = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchExpertAvailability = async () => {
      const expertId = localStorage.getItem("id");
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v2/staff/get/${expertId}`
        );
        if (
          response.data.verifyStaff &&
          response.data.verifyStaff.availability
        ) {
          const availabilityData = response.data.verifyStaff.availability.map(
            (item) => {
              const currentDay = moment().day(item.day).startOf("day");
              const [startHour, startMinute] = item.startTime
                .split(":")
                .map(Number);
              const [endHour, endMinute] = item.endTime.split(":").map(Number);

              return {
                title: "Available",
                start: currentDay
                  .clone()
                  .hour(startHour)
                  .minute(startMinute)
                  .toDate(),
                end: currentDay
                  .clone()
                  .hour(endHour)
                  .minute(endMinute)
                  .toDate(),
              };
            }
          );
          setEvents(availabilityData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchExpertAvailability();
  }, []);

  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
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

export default SessionAppointment;