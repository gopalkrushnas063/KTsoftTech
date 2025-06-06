import React, { useEffect, useRef, useState } from "react";
import "../../styles/TechStackGlobe.css";

const techIcons = [
  "react.svg",
  "nodejs.svg",
  "typescript.svg",
  "nextjs.svg",
  "mongodb.svg",
  "graphql.svg",
  "docker.svg",
  "tailwind.svg",
  "kubernetes.svg",
  "figma.svg",
  "aws.svg",
  "android.svg",
  "flutter.svg",
  "swift.svg",
  "postgresql.svg",
  "apple.svg",
  "light-node-js.svg",
  "linux.svg",
  "linux-mint.svg",
  "java.svg",
  "github.svg",
  "git.svg",
  "spring.svg",
  "node-js.svg",
  "laravel.svg",
  "maven.svg",
  "npm.svg",
  "python.svg",
  "rails.svg",
  "ruby.svg",
  "redux.svg",
  "bloc.svg",
];

const generateSpherePoints = (count: number, radius: number) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    points.push({ x, y, z });
  }
  return points;
};

const rotatePoint = (point: any, rotation: { x: number; y: number }) => {
  const rx = (rotation.x * Math.PI) / 180;
  const ry = (rotation.y * Math.PI) / 180;

  // Rotate around X axis
  let y = point.y * Math.cos(rx) - point.z * Math.sin(rx);
  let z = point.y * Math.sin(rx) + point.z * Math.cos(rx);
  let x = point.x;

  // Rotate around Y axis
  let x2 = x * Math.cos(ry) - z * Math.sin(ry);
  let z2 = x * Math.sin(ry) + z * Math.cos(ry);
  let y2 = y;

  return { x: x2, y: y2, z: z2 };
};

const TechStackGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const iconPositions = useRef<any[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const radius = Math.min(dimensions.width, dimensions.height) * 0.4;
    iconPositions.current = generateSpherePoints(techIcons.length, radius);
  }, [dimensions]);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (!isDragging.current) {
        setRotation((prev) => ({
          x: prev.x + 0.05,
          y: prev.y + 0.15,
        }));
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Drag interaction
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      const clientX =
        e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY =
        e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      lastMouse.current = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;

      const clientX =
        e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY =
        e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;

      const deltaX = clientX - lastMouse.current.x;
      const deltaY = clientY - lastMouse.current.y;

      setRotation((prev) => ({
        x: prev.x + deltaY * 0.3,
        y: prev.y + deltaX * 0.3,
      }));

      lastMouse.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    container.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    container.addEventListener("touchstart", onPointerDown);
    window.addEventListener("touchmove", onPointerMove);
    window.addEventListener("touchend", onPointerUp);

    return () => {
      container.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);

      container.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <div className="globe-wrapper" ref={containerRef}>
      <div className="globe">
        {iconPositions.current.map((pos, idx) => {
          const rotated = rotatePoint(pos, rotation);
          return (
            <div
              className="globe-icon"
              key={idx}
              style={{
                transform: `translate3d(${rotated.x}px, ${rotated.y}px, ${rotated.z}px)`,
              }}
            >
              <img
                src={`/assets/icons/${techIcons[idx]}`}
                alt={techIcons[idx].replace(".svg", "")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackGlobe;
