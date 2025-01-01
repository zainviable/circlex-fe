import React from "react";
import CustomPieChart from "../component/custmPiechart/custmPiechart";
import CustomBarChart from "../component/customBarchart/customBarchart";
import UserTable from "../component/dasboard-table/dasboard-table";
import Dashboard from "../component/dashboard-card/dashbaord-card";

const DashboardPage = () => {
  return (
    <div className="mt-[120px] px-[20px]">
      <Dashboard />
      <div className="flex gap-[20px]">
        <CustomBarChart />
        <CustomPieChart />
      </div>
      <UserTable />
    </div>
  );
};

export default DashboardPage;
