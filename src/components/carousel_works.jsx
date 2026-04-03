import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Data Pipeline",
    description: "Automated ETL pipeline using Airflow and Airbyte to sync data into PostgreSQL.",
    tags: ["Airflow", "Airbyte", "PostgreSQL"],
    image: "/projects/ETL-pipeline.png",
    github: "https://github.com/WilliamNdoni/Data-Engineering-Tutorial",
  },
  {
    title: "Swahili ASR Model",
    description: "A deep learning model that transcribes spoken Swahili into text, trained to handle diverse accents and dialects.",
    tags: ["PyTorch", "HuggingFace", "LLM"],
    image: "/projects/ASR.jpg",
    github: "https://github.com/WilliamNdoni/SWAHILI_ASR",
  },
  {
    title: "Customer Analytics",
    description: "ML-based analysis of customer behaviour and churn prediction.",
    tags: ["Python", "Pandas", "Scikit learn"],
    image: "/projects/customer_analytics.jpg",
    github: "https://github.com/u-mar/Churn-Prediction",
  },
  {
    title: "Sales Dashboard",
    description: "Interactive Power BI dashboard tracking KPIs and sales trends across regions.",
    tags: ["Power BI", "PostrgeSQL", "DAX"],
    image: "/projects/sales_dashboard.png",
    github: null,
  },
  {
    title: "Fuel Analytics Dashboard",
    description: "An interactive dashboard tracking fuel consumption, costs, and trends to support data-driven fleet and resource management decisions.",
    tags: ["Power BI", "PostrgeSQL", "DAX"],
    image: "/projects/fuel-dashboard.png",
    github: null,
  },
  {
    title: "Automated Milk ATM System",
    description: "An automated dispensing system that manages milk vending, tracks sales, and monitors inventory in real time.",
    tags: ["C++", "Node.js", "MySQL"],
    image: "/projects/milk-atm.jpg",
    github: "https://github.com/kenkomu/milkATM",
  },
  {
    title: "Technician KPI Dashboard",
    description: "A performance tracking dashboard monitoring technician productivity, response times, and job completion rates to drive operational efficiency.",
    tags: ["Power BI", "PostrgeSQL", "DAX"],
    image: "/projects/technician-kpi.png",
    github: null,
  },
];

const doubled = [...projects, ...projects];

const FeaturedWorks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollLeft = 0;
      } else if (el.scrollLeft <= 0 && direction === "left") {
        el.scrollLeft = el.scrollWidth / 2;
      }
    }, 350);
  };

  return (
    <div className="relative w-full">

      {/* Left button — desktop only */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-900/10 hover:bg-purple-900/30 text-black rounded-full p-4 text-2xl"
      >
        ‹
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-2 md:px-10 py-4 mobile-scrollbar md:no-scrollbar"
      >
        {doubled.map((project, i) => (
          <div
            key={i}
            className="min-w-[220px] max-w-[220px] md:min-w-[300px] md:max-w-[300px] rounded-2xl border border-white/10 bg-white/5 hover:border-purple-900 transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-[120px] md:h-[180px] bg-white/10 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-3 md:p-4 flex flex-col gap-3">
              <h3 className="text-sm md:text-lg font-semibold text-black">{project.title}</h3>
              <p className="text-xs md:text-sm text-black/70 line-clamp-3">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded-full border border-purple-900/40 text-purple-900 bg-purple-900/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-purple-900 hover:text-purple-700 transition-colors mt-1"
                >
                  <FaGithub size={16} />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right button — desktop only */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-900/10 hover:bg-purple-900/30 text-black rounded-full p-4 text-2xl"
      >
        ›
      </button>

    </div>
  );
};

export default FeaturedWorks;