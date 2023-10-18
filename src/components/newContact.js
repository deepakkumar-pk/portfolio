"use client";
import React, { useState, useRef } from "react";
import { fadeIn } from "../app/variants";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const isInView = useInView(ref, { triggerOnce: false }); // Set triggerOnce to false to keep it in view

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col lg:flex-row">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <div className=" flex justify-start items-center">
                <div>
                  <h4 className="text-xl uppercase font-secondary text-accent font-semibold mb-2 tracking-wide ">
                    Get in touch
                  </h4>
                  <h2 className="text-[45px] lg:text-[90px] leading-none mb-4">
                    Let's work <br /> together!
                  </h2>
                </div>
              </div>
              <div className="my-3 space-y-2">
                <h2 className="text-[18px] lg:text-[24px] font-semibold font-secondary">
                  Mail
                </h2>
                <span className="font-thin tracking-wide">
                  <a href="mailto:contact@deepakkumar.pk">
                    contact@deepakkumar.pk
                  </a>
                </span>
              </div>
              <div className="my-3 space-y-2">
                <h2 className="text-[18px] lg:text-[24px] font-semibold font-secondary">
                  Social Links
                </h2>
                <span className="flex space-x-3">
                  <a href="">
                    <FaYoutube />
                  </a>
                  <a href="">
                    <FaGithub />
                  </a>
                  <a href="">
                    <FaDribbble />
                  </a>
                </span>
              </div>
            </motion.div>
            <div className="flex-1 relative">
              <motion.div
                className="stroke-accent absolute"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <svg width="450px" height="450px" viewBox="0 0 24 24">
                  <motion.path
                    strokeWidth={0.2}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : "initial"} // Animate only when isInView is true
                    transition={{ duration: 3 }}
                    d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
                  />
                </svg>
              </motion.div>
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                onSubmit={handleSubmit}
                className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
              >
                <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent translation-all"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
                <input
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent translation-all"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
                <textarea
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent translation-all resize-none mb-12"
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  rows={3}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="btn btn-lg">
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
