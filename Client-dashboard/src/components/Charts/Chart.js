import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchData } from "../../api/fetch";
import styles from "./Chart.module.css";

const Chart = ({
  data: { temperature, humidity, localtime, country, region },
}) => {
  const [chartData, setchartData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const intialData = await fetchData();

      setchartData(intialData);
    };

    fetchAPI();
  }, []);

  const barChart = temperature ? (
    <Bar
      data={{
        labels: ["Temperature", "Humidity"],
        datasets: [
          {
            backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)"],
            data: [temperature, humidity],
          },
        ],
      }}
    />
  ) : (
    <h1>No Data To view</h1>
  );

  const lineChart = chartData ? (
    <Line
      data={{
        datasets: [
          {
            data: [temperature],
            label: "Temperature",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: [humidity],
            label: "Humidity",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : (
    <h1>No Data To view</h1>
  );
  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
