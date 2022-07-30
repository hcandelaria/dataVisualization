import "./ExploreContainer.css";
import React, { useState, useEffect } from "react";
import BarGraph from "./BarGraph";
import { getHealthInsuranceData } from "../libs/api";
import "./BarGraph.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    if (data.length < 1) {
      const res = await getHealthInsuranceData();
      setData(res?.data);
    }
  };
  useEffect(() => {
    getData();
  });

  return (
    <div className="container">
      <h1>Analysis</h1>
      <BarGraph
        data={data}
        graphDataKey={[
          { dataKey: "Uninsured Rate (2015)", color: "#8884d8" },
          { dataKey: "Uninsured Rate (2010)", color: "#ff4a4a" },
        ]}
      />

      <BarGraph
        data={data}
        graphDataKey={[
          { dataKey: "Uninsured Rate Change (2010-2015)", color: "#82ca9d" },
        ]}
      />
    </div>
  );
};

export default ExploreContainer;
