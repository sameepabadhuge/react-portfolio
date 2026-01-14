export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-center text-4xl font-bold">
        Contact <span className="text-[#2DFF7A]">Me</span>
      </h1>

      <form className="mt-10 grid gap-4 bg-white/5 p-8 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <input className="input" placeholder="Full Name" />
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Mobile" />
          <input className="input" placeholder="Subject" />
        </div>

        <textarea className="input h-40" placeholder="Message" />

        <button className="mx-auto mt-4 rounded-full bg-[#2DFF7A] px-10 py-3 text-black font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
}
