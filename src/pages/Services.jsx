export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Our <span className="text-[#2DFF7A]">Services</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {["Web Development", "Graphic Design", "Digital Marketing"].map((s) => (
          <div key={s} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="text-xl font-semibold">{s}</h3>
            <p className="mt-3 flex-1 text-white/70">
              Professional and modern solutions.
            </p>
            <button className="mt-6 inline-flex justify-center rounded-full bg-[#2DFF7A] px-6 py-2 text-sm font-semibold text-black transition hover:bg-[#1dd85f]">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
