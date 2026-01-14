export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Latest <span className="text-[#2DFF7A]">Projects</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-video w-full">
              <img
                src={`/images/p${i}.jpg`}
                alt={`Project ${i}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
