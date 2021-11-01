import React from "react";
import { Calendar } from "antd";
import "antd/dist/antd.css";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarView = () => {
  return <Calendar />;
};

export default CalendarView;
