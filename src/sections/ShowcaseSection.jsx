import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="py-24 px-4 max-w-6xl mx-auto">
      <div className="w-full text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 - Ace Car Rentals */}
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              ref={rydeRef}
              className="flex flex-col justify-between h-full bg-gray-900 p-6 rounded-2xl shadow-md"
            >
              <a
                className="w-full overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] block"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageSrc}
                  alt={project.imageSrc}
                  className="w-full h-64 object-cover"
                />
              </a>
              <div className="flex flex-col gap-3 mt-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <h5 className="text-sm font-medium text-gray-300">
                  Tech Stack: {project.techStack}
                </h5>
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="mx-auto mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 self-center transition duration-300"
        >
          {showAll ? "Show Less" : "Show All Projects"}
        </button>
      </div>
    </div>
  );
};

export default AppShowcase;
