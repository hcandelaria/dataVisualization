import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getHealthInsuranceData } from "../libs/api";
import "./BarGraph.css";

interface BarGraphProps {
  graphDataKey: graphDetails[];
  data: State[];
}
interface State {
  State: string;
  "Average Monthly Tax Credit (2016)": string;
  "Employer Health Insurance Coverage (2015)": Number;
  "Health Insurance Coverage Change (2010-2015)": Number;
  "Marketplace Health Insurance Coverage (2016)": Number;
  "Marketplace Tax Credits (2016)": Number;
  "Medicaid Enrollment (2013)": Number;
  "Medicaid Enrollment (2016)": Number;
  "Medicaid Enrollment Change (2013-2016)": Number;
  "Medicare Enrollment (2016)": Number;
  "State Medicaid Expansion (2016)": boolean;
  "Uninsured Rate (2010)": Number;
  "Uninsured Rate (2015)": Number;
  "Uninsured Rate Change (2010-2015)": Number;
}

interface graphDetails {
  color: string;
  dataKey: string;
}

const BarGraph: React.FC<BarGraphProps> = ({ data, graphDataKey }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="State" />
          <YAxis />
          <Tooltip />
          <Legend />
          {graphDataKey ? (
            graphDataKey.map((info, index) => {
              return (
                <Bar
                  key={index}
                  dataKey={`${info["dataKey"]}`}
                  fill={`${info["color"]}`}
                />
              );
            })
          ) : (
            <></>
          )}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraph;
