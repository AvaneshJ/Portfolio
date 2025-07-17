import { Chrono } from "react-chrono";
import { skills, experiences } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CTA from "../components/CTA";
import Details from "../components/Details";
const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineItems = experiences.map((exp) => ({
    title: exp.date,
    cardTitle: exp.title,
    cardSubtitle: exp.company_name,
    cardDetailedText: (
      <ul className="list-disc pl-5 space-y-2 mt-2">
        {exp.points.map((point, index) => (
          <li key={index} className="text-slate-600">
            {point}
          </li>
        ))}
      </ul>
    ),
    icon: (
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center p-1"
        style={{ backgroundColor: exp.iconBg }}
      >
        <img
          src={exp.icon}
          alt={exp.company_name}
          className="w-8 h-8 object-contain"
        />
      </div>
    ),
  }));
  return (
    <>
      <section className="max-container" ref={sectionRef}>
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Avanesh
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Software Engineer based in India, specialized in technical education
            through hands-on learning and building applications.
          </p>
        </div>
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>
          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="py-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I've worked with all sorts of companies, levelling up my skills
              and teaming up with smart people. Here's the rundown:
            </p>
          </div>
          <div className="mt-12">
            <Chrono
              items={timelineItems}
              mode="VERTICAL_ALTERNATING"
              cardWidth={500}
              contentDetailsHeight={350}
              scrollable={{ scrollbar: true }}
              theme={{
                primary: "#3b82f6",
                secondary: "#dbeafe",
                cardBgColor: "#ffffff",
                cardForeColor: "#1e293b",
                titleColor: "#1e293b",
                titleColorActive: "#3b82f6",
              }}
              fontSizes={{
                cardTitle: "1.2rem",
                cardSubtitle: "1rem",
                cardText: "0.9rem",
              }}
              classNames={
                ({
                  card: "shadow-lg rounded-xl border border-gray-100 cursor-pointer",
                  cardMedia: "mb-4",
                  cardTitle: "font-bold text-xl text-slate-800",
                  cardSubtitle: "text-indigo-600 font-medium text-lg mt-1",
                },
                "chrono-icons")
              }
              slideShow={true}
              slideItemDuration={3000}
              showOverallSlideshowProgress={true}
              timelinePointShape="circle"
              disableToolbar={true}
            />
          </div>
        </motion.div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
      <hr className="border-slate-200" />
      <Details />
    </>
  );
};

export default About;
