import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "../components/Applayout";
import CalendarView from "../components/CalendarView";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Home = () => {
  return <CalendarView onPanelChange={onPanelChange} />;
};

export default Home;
