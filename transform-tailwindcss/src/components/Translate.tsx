export default function Translate() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 flex items-center justify-center font-semibold text-center bg-slate-300 rounded-xl -z-10">
        options sont
      </div>
      <div className="transition size-24 bg-gradient-to-br from-red-600 to-blue-600 rounded-xl group-hover:-translate-y-[80%]"></div>
    </div>
  );
}
