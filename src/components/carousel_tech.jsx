import { useRef, useEffect } from "react";

const icons = [
  { name: "HTML5", file: "html.png" },
  { name: "CSS", file: "css.png" },
  { name: "Javascript", file: "javascript.jpg" },
  { name: "React", file: "react.png" },
  { name: "Node.js", file: "node.jpg" },
  { name: "TailwindCSS", file: "tailwind.png" },
  { name: "Python", file: "python.jpg" },
  { name: "PostgreSQL", file: "postgresql.png" },
  { name: "Power BI", file: "powerbi.png" },
  { name: "Apache Airflow", file: "airflow.png" },
  { name: "Airbyte", file: "airbyte.jpg" },
  { name: "Dbt", file: "dbt.png" },
  { name: "Git", file: "git.png" },
];

const doubled = [...icons, ...icons];

const TechStack = () => {
  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const isPaused = useRef(false);

  const startAutoScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const step = () => {
      if (!isPaused.current) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
  };

  const stopAutoScroll = () => {
    isPaused.current = true;
  };

  const resumeAutoScroll = () => {
    isPaused.current = false;
  };

  useEffect(() => {
    startAutoScroll();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const scroll = (direction) => {
    stopAutoScroll();
    scrollRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
    setTimeout(() => resumeAutoScroll(), 1000);
  };

  return (
    <div className="relative w-full">
      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-900/10 hover:bg-purple-900/30 text-black rounded-full p-4 text-2xl"
      >
        ‹
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-10 py-4 no-scrollbar"
        style={{ overflowX: "auto" }}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={resumeAutoScroll}
      >
        {doubled.map((icon, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 min-w-[100px]"
          >
            <div className="w-[100px] h-[100px] p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-900 transition-all duration-300 hover:scale-110 pulse-scale">
              <img
                src={`/icons/${icon.file}`}
                alt={icon.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm text-black pulse-scale">{icon.name}</span>
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-900/10 hover:bg-purple-900/30 text-black rounded-full p-4 text-2xl"
      >
        ›
      </button>
    </div>
  );
};

export default TechStack;