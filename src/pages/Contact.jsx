import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const services = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile App Developer"
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 md:py-24">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Contact <span className="text-[#2DFF7A]">Me</span>
      </h1>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mt-10 grid gap-4 rounded-2xl bg-white/5 p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            className="input"
            placeholder="Full Name"
            type="text"
            name="from_name"
            required
          />

          <input
            className="input"
            placeholder="Email"
            type="email"
            name="from_email"
            required
          />

          <input
            className="input"
            placeholder="Mobile"
            type="tel"
            name="mobile"
          />

          <select
            className="input bg-[#0b1220] text-white border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-[#2DFF7A]"
            name="subject"
            required
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <textarea
          className="input h-40"
          placeholder="Message"
          name="message"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="mx-auto mt-4 w-full rounded-full bg-[#2DFF7A] px-10 py-3 text-base font-semibold text-black transition hover:bg-[#1dd85f] disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
