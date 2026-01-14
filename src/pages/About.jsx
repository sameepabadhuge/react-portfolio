export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="text-4xl font-bold">
        About <span className="text-[#2DFF7A]">Me</span>
      </h1>

      <p className="mt-6 text-white/70 leading-relaxed">
        I am a frontend developer with strong skills in React and Tailwind CSS.
      </p>

      <button className="mt-8 rounded-full bg-[#2DFF7A] px-7 py-3 text-black font-semibold">
        Read More
      </button>
    </div>
  );
}
