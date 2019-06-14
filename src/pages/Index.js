import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";
import DashboardLayout from "../components/Layout";

const Index = () => (
  <DashboardLayout>
    <Route path="/dashboard/" exact component={Dashboard} />
    <Route path="/dashboard/users/" exact component={Users} />
  </DashboardLayout>
);

export default Index;
