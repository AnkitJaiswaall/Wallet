import React, { useState } from "react";

import { Line, Area, AreaChart, ResponsiveContainer } from "recharts";
import styles from "./Graph.module.css";
import ButtonGraph from "../Buttons/Button";

const Graph = () => {
  const [selectedButton, setSelectedButton] = useState("Day");

  const handleButtonClick = (label) => {
    setSelectedButton(label);
  };

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 239, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 349, pv: 4300, amt: 2100 },
  ];

  let graphData;
  switch (selectedButton) {
    case "Day":
      graphData = data.slice(0, 2);
      break;
    case "Week":
      graphData = data.slice(0, 4);
      break;
    case "Month":
      graphData = data.slice(0, 6);
      break;
    case "Year":
      graphData = data;
      break;
    default:
      graphData = data;
  }

  const values = graphData.map((entry) => entry.uv);
  const highestValue = Math.max(...values);
  const lowestValue = Math.min(...values);

  return (
    <div>
      <div className={styles.btnGroup}>
        <ButtonGraph
          label={"Day"}
          onClick={() => handleButtonClick("Day")}
          selected={selectedButton === "Day"}
          className={selectedButton === "Day" ? styles.selectedButton : ""}
        />
        <ButtonGraph
          label={"Week"}
          onClick={() => handleButtonClick("Week")}
          selected={selectedButton === "Week"}
          className={selectedButton === "Week" ? styles.selectedButton : ""}
        />
        <ButtonGraph
          label={"Month"}
          onClick={() => handleButtonClick("Month")}
          selected={selectedButton === "Month"}
          className={selectedButton === "Month" ? styles.selectedButton : ""}
        />
        <ButtonGraph
          label={"Year"}
          onClick={() => handleButtonClick("Year")}
          selected={selectedButton === "Year"}
          className={selectedButton === "Year" ? styles.selectedButton : ""}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.graph}>
          <div>
            <span>
              <div className={`${styles.dot} ${styles.greenDot}`}></div>Highest:{" "}
              {highestValue}
            </span>
            <span>
              <div className={`${styles.dot} ${styles.redDot}`}></div>Lowest:{" "}
              {lowestValue}
            </span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={graphData}>
              <Line type="monotone" dataKey="uv" stroke="black" dot={false} />

              <Area
                type="monotone"
                dataKey="uv"
                stroke="#ff9219"
                fill="#fff7ee"
                fillOpacity={0.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
