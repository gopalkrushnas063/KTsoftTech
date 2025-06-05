// components/TechStack3DSpinner.tsx
import React, { useEffect, useRef } from "react";
import "../../styles/TechStack3DSpinner.css";

const icons = [
  "docker.svg",
  "graphql.svg",
  "mongodb.svg",
  "nextjs.svg",
  "nodejs.svg",
  "react.svg",
  "tailwind.svg",
  "typescript.svg",
];

const TechStack3DSpinner = () => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let angle = 0;
    let frameId: number;

    const rotate = () => {
      angle += 0.2;
      if (spinnerRef.current) {
        spinnerRef.current.style.transform = `rotateY(${angle}deg)`;
      }
      frameId = requestAnimationFrame(rotate);
    };

    rotate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="tech-stack-wrapper">
      <div className="tech-stack-spinner" ref={spinnerRef}>
        {icons.map((icon, i) => (
          <div
            key={i}
            className="tech-stack-icon"
            style={{
              transform: `rotateY(${(i * 360) / icons.length}deg) translateZ(200px)`,
            }}
          >
            <img src={`/assets/icons/${icon}`} alt={icon} />
          </div>
        ))}
      </div>
      <div className="sun-center"></div>
    </div>
  );
};

export default TechStack3DSpinner;