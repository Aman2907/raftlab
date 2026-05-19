import React, {useState} from "react";
import {
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
 const [messageSent, setMessageSent] = useState(false);
return ( <section className="bg-gray-100 min-h-screen px-5 lg:px-10 py-12">
  {/* TOP SECTION */}
  <div className="bg-white rounded-3xl shadow-md p-10 text-center">

    <h1 className="text-5xl font-bold text-orange-600">
      Contact Us
    </h1>

    <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
      We'd love to hear from you. Reach out for any
      support, feedback, or partnership inquiries.
    </p>
  </div>

  {/* CONTACT SECTION */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

    {/* LEFT SIDE */}
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-3xl font-bold text-orange-600 mb-8">
        Get In Touch
      </h2>

      <div className="space-y-8">

        {/* PHONE */}
        <div className="flex items-center gap-5">
          <div className="bg-orange-100 p-4 rounded-full">
            <FaPhoneAlt className="text-orange-600 text-xl" />
          </div>

          <div>
            <p className="text-gray-500">Phone</p>

            <h3 className="text-lg font-semibold">
              +91 9876543210
            </h3>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex items-center gap-5">
          <div className="bg-orange-100 p-4 rounded-full">
            <FaEnvelope className="text-orange-600 text-xl" />
          </div>

          <div>
            <p className="text-gray-500">Email</p>

            <h3 className="text-lg font-semibold">
              support@foodie.com
            </h3>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="flex items-center gap-5">
          <div className="bg-orange-100 p-4 rounded-full">
            <FaMapMarkerAlt className="text-orange-600 text-xl" />
          </div>

          <div>
            <p className="text-gray-500">Address</p>

            <h3 className="text-lg font-semibold">
              Kolkata, India
            </h3>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-white rounded-3xl shadow-md p-8">

      <h2 className="text-3xl font-bold text-orange-600 mb-8">
        Send Message
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-orange-600"
        ></textarea>

        <button
         onClick={() => setMessageSent(true)}
         className="w-full bg-orange-600 hover:bg-orange-700 transition text-white py-4 rounded-xl font-semibold text-lg">
          Send Message
        </button>

        {messageSent && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold"> 
              Message Received ✅ 
            </h3> 
            <p className="mt-1"> Thank you for contacting FooDie. We will get back to you soon. </p>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
);
};

export default Contact;
