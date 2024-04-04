"use client";

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../app/variants";

const services = [
  {
    name: "Front-End Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos assumenda cum at aspernatur quisquam similique. Quae consequuntur officia maiores minima quas, animi magnam repudiandae odio voluptate in blanditiis debitis.",
    link: "Learn more",
  },
  {
    name: "Back-End Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos assumenda cum at aspernatur quisquam similique. Quae consequuntur officia maiores minima quas, animi magnam repudiandae odio voluptate in blanditiis debitis.",
    link: "Learn more",
  },
  {
    name: "Full-Stack Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos assumenda cum at aspernatur quisquam similique. Quae consequuntur officia maiores minima quas, animi magnam repudiandae odio voluptate in blanditiis debitis.",
    link: "Learn more",
  },
  {
    name: "Mobile App Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos assumenda cum at aspernatur quisquam similique. Quae consequuntur officia maiores minima quas, animi magnam repudiandae odio voluptate in blanditiis debitis.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I<span>&#39;</span>m a Freelace Full-Stack Developer with over 2
              years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href=" "
                        className="btn h-9 w-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
