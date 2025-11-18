export default function RightSidebar() {
  return (
    <aside className="w-80 p-6 hidden xl:block space-y-6">
      
      {/* Schedule */}
      <div>
        <h3 className="font-semibold mb-3 text-lg">My Schedule</h3>
        <div className="space-y-4">
          {["Stretch", "Back Stretch", "Yoga"].map((task, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow font-medium">
              {task}
            </div>
          ))}
        </div>
      </div>

      {/* Goals */}
      <div>
        <p className="font-bold mb-3 text-[20px] text-[#475569]">Goals</p>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow font-medium text-sm text-[#1E293B]">
            ABS & Stretch
          </div>
          <div className="bg-white p-4 rounded-xl shadow font-medium">
            Push Up
          </div>
        </div>
      </div>

      {/* Upgrade card */}
      <div className="bg-purple-600 text-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-2">50% Off Premium</h3>
        <p className="text-sm opacity-90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-orange-500 w-full py-2 rounded-xl font-medium">
          Upgrade
        </button>
      </div>
    </aside>
  );
}
