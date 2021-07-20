import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const GraficoAire =( {data} )=> (
    <LineChart width={900} height={300} data={data}>
      <Line type="monotone" dataKey="o3" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="datetime" />
      <YAxis />
    </LineChart>
  );

export default GraficoAire;