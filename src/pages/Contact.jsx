export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:py-24">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Contact <span className="text-[#2DFF7A]">Me</span>
      </h1>

      <form className="mt-10 grid gap-4 rounded-2xl bg-white/5 p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input className="input" placeholder="Full Name" type="text" name="name" />
          <input className="input" placeholder="Email" type="email" name="email" />
          <input className="input" placeholder="Mobile" type="tel" name="mobile" />
          <input className="input" placeholder="Subject" type="text" name="subject" />
        </div>

        <textarea className="input h-40" placeholder="Message" name="message" />

        <button className="mx-auto mt-4 w-full rounded-full bg-[#2DFF7A] px-10 py-3 text-base font-semibold text-black transition hover:bg-[#1dd85f] sm:w-auto">
          Send Message
        </button>
      </form>
    </div>
  );
}
