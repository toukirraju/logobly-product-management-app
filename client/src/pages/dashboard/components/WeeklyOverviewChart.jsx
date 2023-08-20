import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { MoreVertIcon } from "../../../assets";

const WeeklyOverviewChart = () => {
  // Custom Y-axis tick formatter function
  const formatYAxisTick = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value;
  };

  const data2 = [
    {
      name: "2021",
      uv: 3490,
    },
  ];
  return (
    <div className="card w-full md:w-4/12 ">
      <div className="flex justify-between">
        <span className="text-xl font-semibold">Weekly Overview</span>
        <img src={MoreVertIcon} alt="" />
      </div>
      <div>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart
            data={data2}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis tickFormatter={formatYAxisTick} />
            <Bar
              dataKey="uv"
              stackId="a"
              fill="#1570EF"
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-4 py-3">
        <span className="text-2xl font-semibold">45%</span>
        <span className="text-sm font-normal text-gray-500">
          Your sales performance is 45% 😎 better compared to last month
        </span>
      </div>
      <button className="text-center uppercase w-full rounded text-white bg-blue-600 py-1 px-1">
        Details
      </button>
    </div>
  );
};

export default WeeklyOverviewChart;

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={10}
        height={height - 2}
        fill={fill}
        rx={7} // Border radius value
        ry={7} // Border radius value
      />
    </g>
  );
};
