import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { BiBarChartSquare } from "react-icons/bi";

const Charts = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let empSal = [];
    let empAge = [];
    const data = axios
      .get(
        "http://api.weatherstack.com/current?access_key=10be6c6f21c0f00ac5996f269291dee9&query=Tunisia"
      )

      .then((data) => {
        console.log("my data", data);

        empSal.push(data.data.current.temperature);
        empAge.push(data.data.current.humidity);

        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "level of thiccness",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Dankmemes</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Charts;
