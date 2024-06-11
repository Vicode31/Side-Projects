export default function RotateOrigin() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 flex items-center justify-center font-semibold text-center bg-slate-200 -z-10 rounded-xl">
        possibles
      </div>
      <div className="transition origin-top-right bg-gradient-to-tr from-green-600 to-blue-600 size-24 rounded-xl group-hover:rotate-180"></div>
      <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-white border border-black rounded-full size-6"></div>
    </div>
  );
}
