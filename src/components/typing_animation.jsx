import { useState, useEffect } from "react";

export default function TypewriterText() {
  const parts = [
    { text: "Hello, I'm ", color: "black" },
    { text: "\nWilliam Ndoni.", color: "purple" },
    { text: "\nI'm a ", color: "black" },
    { text: "data analyst ", color: "purple" },
    { text: "building data-driven ", color: "black" },
    { text: "web applications ", color: "purple" },
    { text: "and scalable data pipelines.", color: "black" },
  ];

  const fullText = parts.map((p) => p.text).join("");
  const [index, setIndex] = useState(0);
  const isDone = index >= fullText.length;

  useEffect(() => {
    if (isDone) return;
    const timeout = setTimeout(() => setIndex((i) => i + 1), 40);
    return () => clearTimeout(timeout);
  }, [index, isDone]);

  const displayed = fullText.slice(0, index);
  let charCount = 0;

  return (
    <h1 className="typewriter-text">
      {parts.map((part, i) => {
        const start = charCount;
        charCount += part.text.length;
        const slice = displayed.slice(start, charCount);
        return (
          <span key={i} style={{ color: part.color }}>
            {slice.split("\n").map((line, j) => (
              <span key={j}>
                {line}
                {j < slice.split("\n").length - 1 && <br />}
              </span>
            ))}
          </span>
        );
      })}
      {!isDone && <span className="animate-pulse">|</span>}
    </h1>
  );
}