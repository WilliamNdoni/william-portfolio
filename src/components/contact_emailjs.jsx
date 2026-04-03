import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      service_id,
      template_id,
      formRef.current,
      public_key
    ).then(() => {
      setSent(true);
      setLoading(false);
      formRef.current.reset();
    }).catch(() => {
      setLoading(false);
      alert("Something went wrong, please try again.");
    });
  };

  return (
    <>
      {sent ? (
        <p className="text-center text-purple-900 font-semibold">
          Message sent successfully!
        </p>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-xl border border-purple-900/30 bg-white/5 text-black outline-none focus:border-purple-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-xl border border-purple-900/30 bg-white/5 text-black outline-none focus:border-purple-900"
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="p-3 rounded-xl border border-purple-900/30 bg-white/5 text-black outline-none focus:border-purple-900"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-3 rounded-xl border border-purple-900/30 bg-white/5 text-black outline-none focus:border-purple-900 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="p-3 rounded-xl bg-purple-900 text-white hover:bg-purple-700 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
      
    </>
  );
};

export default Contact;