export default function Scale() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 flex justify-center pt-3 font-semibold text-center bg-slate-300 rounded-xl -z-10">
        Toutes ces
      </div>
      <div className="transition origin-bottom size-24 bg-gradient-to-br from-red-600 to-yellow-400 rounded-xl group-hover:scale-y-50"></div>
    </div>
  );
}
