"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";

const accordionData = [
  {
    id: 0,
    title: "What is your focus area?",
    content:
      "My focus area is building dynamic, scalable, and user-focused web applications. I specialize in creating performant, accessible interfaces with React and Next.js, integrating robust backends, and working with CMS platforms like WordPress, Strapi, and Contentful to deliver responsive, pixel-perfect experiences.",
  },
  {
    id: 1,
    title: "How many years of experience do you have?",
    content:
      "I have over 5 years of experience building dynamic web applications. I focus on creating responsive, accessible, and scalable solutions while working with small and medium-sized teams and businesses. I collaborate closely with designers and stakeholders to deliver user-focused, high-quality results.",
  },
  {
    id: 2,
    title: "What design & development tools do you use?",
    content:
      "I use a range of design and development tools to deliver high-quality work. For development, I rely on VS Code and Git for coding and version control. For design and prototyping, I work with Figma and Adobe XD to collaborate with designers and translate concepts into functional interfaces.",
  },
  {
    id: 3,
    title: "How do you use AI in your work?",
    content:
      "I use AI to streamline my workflow and enhance productivity. It helps me generate code snippets, automate repetitive tasks, and brainstorm solutions or design ideas. I also use AI to quickly prototype features, debug issues, and improve efficiency while maintaining high-quality, user-focused results.",
  },
  {
    id: 4,
    title: "What techstack's do you use?",
    content:
      "I work with both the MERN stack and the LAMP stack, depending on project requirements. This allows me to build full-stack web applications with modern JavaScript frameworks as well as traditional PHP-based solutions, ensuring scalable, performant, and maintainable results.",
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {accordionData.map((item) => {
        const isOpen = openId === item.id;
        const contentId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;

        return (
          <div
            key={item.id}
          >
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleAccordion(item.id)}
              className="flex justify-between items-center w-full font-normal px-6 py-4 text-[#cac9c9] text-xl cursor-pointer"
            >
              <h3>{item.title}</h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <IoIosArrowDown color="#cac9c9" aria-hidden="true" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                    <div className="border-1 border-[#ffffff14] bg-[#101010] text-left rounded-xl py-4 px-6">
                        <p className="mb-0">{item.content}</p>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
