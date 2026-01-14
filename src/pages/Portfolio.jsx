export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-center text-4xl font-bold">
        Latest <span className="text-[#2DFF7A]">Projects</span>
      </h1>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="rounded-2xl overflow-hidden border border-white/10">
            <img src={`/images/p${i}.jpg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
