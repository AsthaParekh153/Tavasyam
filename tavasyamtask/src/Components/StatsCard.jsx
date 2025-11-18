export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow h-32 flex flex-col justify-between">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-3xl font-bold text-orange-500">{value}</p>
    </div>
  );
}
