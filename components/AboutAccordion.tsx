"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiPlus } from "react-icons/fi";
import { Noto_Serif_Display } from "next/font/google";

const noto = Noto_Serif_Display({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ['latin'],
});

const accordionData = [
  {
    id: 0,
    title: "Experience",
    content:  [
      {
        role: 'Web Developer',
        companyName: 'Contra Agency',
        companyLocaion: 'Barbican, London, UK',
        timeAtCompany: 'Nov 2022 - Present',
        description: 'I developed modern CMS solutions using WordPress and Drupal, integrating them seamlessly with custom frontend frameworks. Alongside this, I built dynamic, user-friendly interfaces with React, Vue.js, and TypeScript, ensuring each project was responsive, accessible, and met modern web standards..\nLine To enhance functionality, I integrated and consumed REST and GraphQL APIs, improving both performance and data interactivity. I also built and deployed backend services using Node.js and Express, enabling custom business logic and streamlined data processing..\nLine Collaboration played a key role in my work, as I partnered with designers and stakeholders to ensure alignment between features and design goals. I contributed to Agile ceremonies, supported API integrations, optimized performance, and improved codebase scalability to keep projects efficient and maintainable.',
      },
      {
        role: 'Senior Frontend Developer',
        companyName: 'Pomegranate Media',
        companyLocaion: 'Grenwich, London, UK',
        timeAtCompany: 'Feb 2020 - Nov 2022',
        description: 'I led full-stack development across multiple projects, working with React, Next.js, Node.js, and GraphQL to build performant and scalable web applications. I also developed and maintained headless CMS solutions using Strapi and WordPress, ensuring smooth integration through GraphQL..\nLine On the backend, I designed and implemented custom endpoints, APIs, and server logic using Node.js and Express, supporting robust data processing and business logic. I oversaw the integration of third-party services and data sources via REST and GraphQL to enhance functionality and performance..\nLine Beyond development, I mentored junior developers and reviewed code to maintain high standards of quality, scalability, and performance. I collaborated closely with clients to translate business needs into technical requirements and partnered with designers to ensure the frontend implementation remained true to design systems and user experience goals.',
      },
      {
        role: 'Web Developer',
        companyName: 'NDG Technology',
        companyLocaion: 'Oakham, Leicestershire, UK',
        timeAtCompany: 'Oct 2019 - Jan 2020',
        description: 'I delivered full-stack features across projects, building both frontend components and backend logic to create seamless user experiences. This included developing internal tools and portals, managing database operations, and integrating APIs to support business workflows..\nLine On the backend, I created endpoints in Node.js and worked with relational databases to ensure reliable data handling and performance. I consistently focused on meeting project deadlines while maintaining quality standards..\nLine I successfully balanced multiple projects at once, collaborating with cross-functional teams to keep delivery on track and aligned with business goals.',
      }
    ]
  },
  {
    id: 1,
    title: "Education",
    content:
    [
      {
        role: 'BSc Computer Science',
        companyName: 'University of Kent',
        companyLocaion: 'Canterbury, Kent, UK',
        timeAtCompany: 'Sep 2016 - May 2029',
        description: 'Graduated with a 2:1 in Computer Science from the University of Kent, developing strong skills in software development, algorithms, and system design..\nLine Successfully completed a final-year project focused on building a marketplace platform for university students to buy and sell second-hand books, streamlining the process and encouraging sustainable reuse..\nLine Conducted a dissertation exploring the design and implementation of peer-to-peer marketplace systems, focusing on usability, scalability, and user experience for a student audience.',
      },
      {
        role: 'Information Technology',
        companyName: 'Leicester College',
        companyLocaion: 'Leicester, UK',
        timeAtCompany: 'Sep 2014 - June 2016',
        description: 'Achieved D*D*D in Information Technology at Leicester College, gaining a solid foundation in computing, networking, and software development..\nLine Completed coursework and practical projects focused on IT systems, database design, and web development, building strong technical and problem-solving skills..\nLine Collaborated with peers on group assignments, developing communication and teamwork abilities while meeting strict project deadlines.',
      },
    ]
  },
  {
    id: 2,
    title: "Skills",
    content: "React\nLine Next.js\nLine Vue.js\nLine Javascript\nLine Typescript\nLine HTML\nLine CSS/SCSS\nLine Node.js\nLine Express\nLine GraphQL\nLine REST API's\nLine PHP\nLine Docker\nLine AWS\nLine GIT\nLine Cloudflare\nLine Azure Devops\nLine CI/CD Pipelines\nLine Jira\nLine Wordpress\nLine Strapi\nLine Drupal\nLine Contentful\nLine Graph CMS\nLine Sitecore\nLine Figma\nLine Adobe XD\nLine Sketch\nLine Photoshop"
  },
];

export default function AboutAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {accordionData.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-[#101010] px-8 rounded-2xl mb-2 border-1 border-[#ffffff14]"
          >
            <h3
              onClick={() => toggleAccordion(item.id)}
              className="flex justify-between items-center w-full py-5 text-[#f8f8f8] text-4xl font-medium cursor-pointer"
            >
              {item.title}
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <FiPlus color="#cac9c9" />
              </motion.div>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                    <div className="text-left rounded-xl py-4">
                                      {Array.isArray(item.content) ? (
                      item.content.map((contentItem, idx) => (
                        <div key={idx} className="mb-6">
                          <h3 className="text-2xl font-semibold text-[#f8f8f8] pb-1">
                            {contentItem.role}
                          </h3>
                          <p className="text-sm text-gray-400 pb-1">
                            <span className={`${noto.className} text-lg text-center pb-2 !italic font-medium`}>{contentItem.companyName}</span> –{" "}
                            {contentItem.companyLocaion}
                          </p>
                          <p className="text-sm text-gray-500 mb-2">
                            {contentItem.timeAtCompany}
                          </p>
                          {/* ✅ Split description on \nLine to keep formatting */}
                          {contentItem.description
                            .split("\nLine")
                            .map((line, i) => (
                              <p key={i} className="mb-2">
                                {line.trim()}
                              </p>
                            ))}
                        </div>
                      ))
                    ) : (
                      <div className="grid grid-flow-col auto-rows-auto gap-x-8 gap-y-2 grid-rows-[repeat(5,auto)]">
                        {item.content.split("\nLine").map((line, i) => (
                          <p key={i} className="border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold w-fit">
                            {line.trim()}
                          </p>
                        ))}</div>
                    )}
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
