import React from "react";
import { 
  SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, 
  SiNextdotjs, SiRedux, SiExpress, SiPostman, SiGithub, SiMysql, SiJavascript 
} from "react-icons/si";

const row1 = [
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" }, // Crucial for modern Frontend/Fullstack
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" }, // Shows you can handle complex state
];

const row2 = [
  { name: "Node JS", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express", icon: <SiExpress />, color: "#FFFFFF" }, // The "E" in MERN stack
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" }, // Tool for API testing
  { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" }, // Professional collaboration
];

const Card = ({ tech }) => (
  <div className="group relative min-w-[220px] p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 backdrop-blur-lg transition-all duration-500 hover:bg-white/10">
    <div 
      className="w-12 h-12 rounded-md flex items-center justify-center text-xl transition-transform duration-500 group-hover:scale-110"
      style={{ 
        backgroundColor: `${tech.color}20`, // 20% opacity background
        color: tech.color 
      }}
    >
      {/* Check if we use a React Icon or a CDN Image */}
      {tech.icon ? (
        tech.icon
      ) : (
        <img src={tech.img} alt={tech.name} className="w-10 h-10 object-contain" />
      )}
    </div>
    
    <div className="z-10">
      <div className="text-base font-semibold text-white tracking-wide">{tech.name}</div>
    
    </div>

    {/* Hover Glow Effect */}
    <div 
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      style={{
        border: `1px solid ${tech.color}40`,
        boxShadow: `inset 0 0 15px ${tech.color}10`
      }}
    />
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-0 xl:py-14 relative overflow-hidden bg-transparent">
      <div className=" mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-sm text-blue-400 uppercase tracking-[0.3em] font-bold mb-3">
            Inventory
          </h3>
          <h2 className="text-4xl lg:text-6xl font-black text-white">
            The <span className="text-blue-500">Tech Stack</span>
          </h2>
        </div>

        {/* ROW 1 → LEFT */}
        <div className="relative mt-12 overflow-hidden">
          <div className="flex gap-6 animate-marquee-left whitespace-nowrap py-4">
            {[...row1, ...row1, ...row1].map((tech, i) => (
              <Card key={`r1-${i}`} tech={tech} />
            ))}
          </div>
          {/* Side Faders */}
         
        </div>

        {/* ROW 2 → RIGHT */}
        <div className="relative mt-8 overflow-hidden">
          <div className="flex gap-6 animate-marquee-right whitespace-nowrap py-4">
            {[...row2, ...row2, ...row2].map((tech, i) => (
              <Card key={`r2-${i}`} tech={tech} />
            ))}
          </div>
          {/* Side Faders */}
        
        </div>

      </div>

   
    </section>
  );
};

export default Skills;