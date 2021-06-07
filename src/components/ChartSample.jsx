import React from "react";
import { Bar } from "react-chartjs-2";

const graphData = {
    labels: [
      // 軸ラベル
      // 各ラベルを配列にすることで軸ラベルが改行されて表示される
      ["2019年", "1月"],
      ["2019年", "2月"],
      ["2019年", "3月"],
      ["2019年", "4月"],
      ["2019年", "5月"],
      ["2019年", "6月"],
      ["2019年", "7月"],
      ["2019年", "8月"],
      ["2019年", "9月"],
      ["2019年", "10月"],
      ["2019年", "11月"],
      ["2019年", "12月"]
    ],
    datasets: [
      // 表示するデータセット
      {
        data: [
          16,
          42,
          117.5,
          90.5,
          120.5,
          225,
          193,
          110,
          197,
          529.5,
          156.5,
          76.5
        ],
        backgroundColor: "rgba(30, 144, 255, 1)",
        label: "月別合計降水量(mm)"
      }
    ]
  };

  /** グラフオプション */
  const graphOption = {
    scales: {
      xAxes: [
        // x軸設定
        {
          scaleLabel: {
            // 軸ラベル設定
            display: true,
            labelString: "2019年"
          }
        }
      ],
      yAxes: [
        // y軸設定
        {
          scaleLabel: {
            display: true,
            labelString: "合計降水量(mm)"
          },
          ticks: {
            // 軸目盛設定
            beginAtZero: true,
            callback: function (value, index, values) {
              return `${value}(mm)`;
            }
          }
        }
      ]
    }
  };



const ChartSample = () => {
	return (
		<Bar data={graphData} options={graphOption} />
		);

};


export default ChartSample;








