"use client";

import { techCardsItems } from "../_lib/constants";
import TechCard from "./TechCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="relative z-10 py-16 sm:py-24" id="about">
      <div className="space-y-4 mb-10">
        <motion.h1
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Current technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          I&apos;m well versed with a variety of technologies, mainly related to Computer Architecture, Networks,
          and so forth. Currently I am working on expanding my skillsets to the domains of Artificial Intelligence,
          and Web Development.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
      >
        {techCardsItems.map((cardItem) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
