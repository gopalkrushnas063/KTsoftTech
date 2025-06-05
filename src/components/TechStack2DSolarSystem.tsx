// components/TechStack2DSolarSystem.tsx
import React, { useEffect, useRef } from "react";
import "../../styles/TechStack2DSolarSystem.css";

const techPlanets = [
  { name: "react", icon: "react.svg", orbitRadius: 80, size: 30, speed: 0.02, color: "#61DAFB" },
  { name: "nodejs", icon: "nodejs.svg", orbitRadius: 120, size: 32, speed: 0.015, color: "#68A063" },
  { name: "typescript", icon: "typescript.svg", orbitRadius: 160, size: 28, speed: 0.018, color: "#3178C6" },
  { name: "nextjs", icon: "nextjs.svg", orbitRadius: 200, size: 30, speed: 0.012, color: "#000000" },
  { name: "mongodb", icon: "mongodb.svg", orbitRadius: 240, size: 34, speed: 0.01, color: "#47A248" },
  { name: "graphql", icon: "graphql.svg", orbitRadius: 280, size: 29, speed: 0.014, color: "#E535AB" },
  { name: "docker", icon: "docker.svg", orbitRadius: 320, size: 33, speed: 0.008, color: "#2496ED" },
  { name: "tailwind", icon: "tailwind.svg", orbitRadius: 360, size: 30, speed: 0.009, color: "#38B2AC" },
];

const TechStack2DSolarSystem = () => {
  const planetsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let animationId: number;
    const angles = techPlanets.map(() => Math.random() * Math.PI * 2);

    const animate = () => {
      techPlanets.forEach((planet, i) => {
        angles[i] += planet.speed;
        const x = Math.cos(angles[i]) * planet.orbitRadius;
        const y = Math.sin(angles[i]) * planet.orbitRadius;
        
        if (planetsRef.current[i]) {
          planetsRef.current[i].style.transform = `translate(${x}px, ${y}px)`;
          planetsRef.current[i].style.filter = `drop-shadow(0 0 4px ${planet.color})`;
        }
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="solar-system-2d">
      <div className="sun-2d"></div>
      {techPlanets.map((planet, i) => (
        <React.Fragment key={planet.name}>
          <div 
            className="orbit-path-2d"
            style={{
              width: `${planet.orbitRadius * 2}px`,
              height: `${planet.orbitRadius * 2}px`,
              borderColor: `${planet.color}30`
            }}
          ></div>
          <div 
            ref={el => planetsRef.current[i] = el as HTMLDivElement}
            className="planet-2d"
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
            }}
          >
            <img 
              src={`/assets/icons/${planet.icon}`} 
              alt={planet.name} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TechStack2DSolarSystem;