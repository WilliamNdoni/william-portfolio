import React from "react"
import TypewriterText from "./components/typing_animation";
import { BarChart2, Database, Code2, Trophy } from "lucide-react";
import TechStack from "./components/carousel_tech";
import FeaturedWorks from "./components/carousel_works";
import Contact from "./components/contact_emailjs"
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const stats = [
  { icon: <Trophy size={55} />, value: "3+", label: "Years Experience" },
  { icon: <BarChart2 size={55} />, value: "20+", label: "Projects Completed" },
  { icon: <Database size={55} />, value: "10+", label: "Data Pipelines Built" },
  { icon: <Code2 size={55} />, value: "10+", label: "Tools & Technologies" },
];

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center pt-20 px-4 md:px-20 py-10 gap-10 items-center">

        {/* Hero */}
        <div className="div-shadow flex-col md:flex-row">
          <div className="w-full md:w-2/3 justify-center">
            <TypewriterText />
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img src="/WP_icon.png" alt="profile picture"
              className="rounded-full border-4 border-purple-900 w-48 h-48 md:w-80 md:h-80 object-cover"/>
          </div>
        </div>

        {/* About */}
        <div id="about" className="div-shadow flex-col gap-5">
          <h2 className="text-center">About Me</h2>
          <p className="text-center">
            I bridge the gap between data and technology — building scalable
            <span> data pipelines, data-driven web applications,
            and meaningful visualizations </span> that tell compelling stories.
          </p>
          <p className="text-center">
            I thrive at the intersection of analytics and engineering,
            always looking for ways to make data more accessible and impactful.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5">
                <span className="text-black">{stat.icon}</span>
                <span className="text-2xl font-bold text-purple-900 pulse-scale">{stat.value}</span>
                <span className="text-sm text-black text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div id="skills" className="div-shadow flex-col gap-5">
          <h2 className="text-center">Tech Stack</h2>
          <TechStack />
        </div>

        {/* Featured Works */}
        <div id="works" className="div-shadow flex-col gap-5">
          <h2 className="text-center">Featured Works</h2>
          <FeaturedWorks />
        </div>

        {/* Work Experience */}
        <div id="experience" className="div-shadow flex-col gap-6">
          <h2 className="text-center">Work Experience</h2>
          <div className="flex flex-col md:flex-row gap-4 items-stretch w-full">

            <div className="flex flex-col gap-1 border-2 border-purple-900/50 rounded-4xl p-3 w-full md:w-1/2">
              <div className="flex items-start gap-1 p-4 rounded-xl bg-white/5">
                <img src="dns.png" alt="Davis and Shirtliff logo" className="w-16 h-16 object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">Davis and Shirtliff</h3>
                <h3 className="text-purple-900">Data Analyst</h3>
                <h5>Apr 2025 - Mar 2026</h5>
                <ul className="list-disc ml-4 mt-2.5 text-sm">
                  <li>Built automated ETL pipelines reducing data processing time by 40%</li>
                  <li>Developed Power BI dashboards used by 3 departments</li>
                  <li>Managed PostgreSQL databases with 10M+ records</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-1 border-2 border-purple-900/50 rounded-4xl p-3 w-full md:w-1/2">
              <div className="flex items-start gap-2 p-4 rounded-xl bg-white/5">
                <img src="kimfay.jpg" alt="Kim-Fay logo" className="w-16 h-16 object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold">Kim-Fay Professional</h3>
                <h3 className="text-purple-900">Sales Operations Coordinator</h3>
                <h5>Feb 2025 - Mar 2025</h5>
                <ul className="list-disc ml-4 mt-2.5 text-sm">
                  <li>Analyzed sales performance metrics to identify trends and improvement opportunities.</li>
                  <li>Coordinated administrative processes to improve sales efficiency.</li>
                  <li>Delivered actionable insights to support strategic decision making.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="div-shadow flex-col w-full max-w-2xl">
          <h2 className="text-center">Get In Touch</h2>
          <Contact />
        </div>

      </main>
      <Footer />
    </>
  )
}

export default App