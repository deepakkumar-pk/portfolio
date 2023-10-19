import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../app/variants";
import emailjs from "@emailjs/browser";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";

const Contact = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
    };

    let isValid = true;

    if (!user.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!user.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newErrors.email = "Email is not valid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_ID;

      // Create a new object that contains dynamic template params
      const templateParams = {
        name: user.name,
        email: user.email,
        to_name: "Deepak Kumar",
        message: user.message,
      };

      // Send the email using EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setuser({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
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
                  Let<span>&#39;</span>s work <br /> together!
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
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInput}
              placeholder="Your Name"
            />
            <div className="text-red-500">{errors.name}</div>
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Your Email"
            />
            <div className="text-red-500">{errors.email}</div>
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              name="message"
              value={user.message}
              rows={3}
              onChange={handleInput}
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
