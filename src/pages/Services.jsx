export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-center text-4xl font-bold">
        Our <span className="text-[#2DFF7A]">Services</span>
      </h1>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {["Web Development", "Graphic Design", "Digital Marketing"].map(s => (
          <div key={s} className="rounded-2xl bg-white/5 p-8 border border-white/10">
            <h3 className="text-xl font-semibold">{s}</h3>
            <p className="mt-3 text-white/70">
              Professional and modern solutions.
            </p>
            <button className="mt-6 rounded-full bg-[#2DFF7A] px-6 py-2 text-black">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
