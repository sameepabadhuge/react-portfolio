export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 md:py-24">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-3xl font-bold sm:text-4xl">
          About <span className="text-[#2DFF7A]">Me</span>
        </h1>

        <p className="text-base leading-relaxed text-white/70 sm:text-lg">
          I am a frontend developer with strong skills in React and Tailwind CSS.
        </p>

        <button className="inline-flex rounded-full bg-[#2DFF7A] px-7 py-3 text-base font-semibold text-black transition hover:bg-[#1dd85f]">
          Read More
        </button>
      </div>
    </div>
  );
}
