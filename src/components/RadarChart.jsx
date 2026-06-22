import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart as ReRadarChart, ResponsiveContainer, Tooltip } from 'recharts';
export default function RadarChart({ data }) {
  return <div className="chart"><ResponsiveContainer width="100%" height={320}><ReRadarChart data={data} outerRadius="72%"><PolarGrid /><PolarAngleAxis dataKey="area" tick={{ fontSize: 11 }} /><PolarRadiusAxis domain={[0, 3]} tickCount={4} /><Radar dataKey="value" name="Mittelwert" stroke="#1b5f7a" fill="#1b5f7a" fillOpacity={0.25} /><Tooltip /></ReRadarChart></ResponsiveContainer></div>;
}
