import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProfitChart = () => {
  const data = [
    {
      name: "2015",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2016",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2017",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2018",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "2019",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "2020",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "2021",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // Custom Y-axis tick formatter function
  const formatYAxisTick = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value;
  };

  return (
    <div className="w-full md:w-8/12 lg:border-r-2">
      <h2 className="text-xl font-semibold">Total Profit</h2>
      <div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            // width={500}
            // height={250}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatYAxisTick} />
            <Tooltip />
            {/* <Legend /> */}
            <Bar
              dataKey="pv"
              stackId="a"
              fill="#1570EF"
              shape={<CustomBar />}
            />
            <Bar
              dataKey="uv"
              stackId="a"
              fill="#56CA00"
              shape={<CustomBar />}
            />
            <Bar
              dataKey="amt"
              stackId="a"
              fill="#8A8D93"
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitChart;

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
