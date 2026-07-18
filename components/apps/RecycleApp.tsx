"use client";

const DELETED = [
  { name: "untitled_portfolio_v1.html", date: "2009" },
  { name: "Comic Sans experiment.css", date: "2012" },
  { name: "flash_intro.swf", date: "2007" },
  { name: "myspace_top_8.bmp", date: "2006" },
];

export function RecycleApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="vista-toolbar px-3 py-2 text-[12px] text-[#555]">
        Recycle Bin — items safely deleted from this machine
      </div>
      <div className="flex-1 overflow-auto vista-scroll p-3">
        <table className="w-full text-[12px] text-left">
          <thead>
            <tr className="border-b border-[#a8bdd0] text-[#555]">
              <th className="py-1 font-medium">Name</th>
              <th className="py-1 font-medium">Deleted</th>
            </tr>
          </thead>
          <tbody>
            {DELETED.map((item) => (
              <tr key={item.name} className="border-b border-[#e0e8f0] hover:bg-[#e8f2fc]">
                <td className="py-2 text-[#222]">🗑 {item.name}</td>
                <td className="py-2 text-[#666]">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-[11px] text-[#888] italic">
          Emptying the Recycle Bin will not delete your real projects. Promise.
        </p>
      </div>
    </div>
  );
}
