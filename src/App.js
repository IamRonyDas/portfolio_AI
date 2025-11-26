import React, { useState, useEffect, useCallback, useRef } from 'react';
import userData from './data/userdata';
import codeSnippets from './data/codeSnippet';
import TypewriterEffect from './hooks/typewriterEffect';


const CodeEditorSimulator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % codeSnippets.length);
    }, 5000); // 5000ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentSnippet = codeSnippets[activeIndex];

  return (
    <div className="rounded-xl overflow-hidden bg-gray-800/80 neon-border shadow-2xl shadow-indigo-900/50">
      {/* Tab Header */}
      <div className="flex bg-gray-900 border-b border-indigo-900/50 p-2 overflow-x-auto">
        {codeSnippets.map((snippet, index) => (
          <button
            key={snippet.title}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-sm font-mono transition duration-300 rounded-t-lg mr-1 whitespace-nowrap
              ${index === activeIndex
                ? 'bg-gray-700 text-indigo-400 border-b-2 border-indigo-400'
                : 'text-gray-400 hover:text-indigo-300 hover:bg-gray-800'
              }`}
          >
            {snippet.title}
          </button>
        ))}
      </div>

      {/* Code Content Area */}
      <div className="p-4 md:p-6 h-96 overflow-y-auto futuristic-scroll">
        <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap transition-opacity duration-500 opacity-100">
          <code className="language-javascript">
            <span className="text-gray-500 block mb-2">// Language: {currentSnippet.language}</span>
            {currentSnippet.content.split('\n').map((line, lineIndex) => (
              <span key={lineIndex} className="block hover:bg-gray-700/50 transition-colors duration-100">
                <span className="text-gray-600 inline-block w-6 select-none mr-2 text-right">{lineIndex + 1}</span>
                {line}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};


// --- Custom Styles for Futuristic Look (Keyframes) ---
const customStyles = `
/* Global Font/Body */
html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; }

/* Keyframes */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse-neon {
  0% { box-shadow: 0 0 5px #6366f1, 0 0 10px #818cf8; }
  50% { box-shadow: 0 0 15px #6366f1, 0 0 25px #818cf8; }
  100% { box-shadow: 0 0 5px #6366f1, 0 0 10px #818cf8; }
}

@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Neon Effects */
.neon-border {
  border: 1px solid #4f46e5;
  box-shadow: 0 0 5px rgba(79, 70, 229, 0.5), 0 0 15px rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
}

.neon-border:hover {
  box-shadow: 0 0 10px #8b5cf6, 0 0 30px #a78bfa;
}

.bento-item {
  /* Applying pulse-neon to bento items for visual interest */
  animation: pulse-neon 4s infinite alternate; 
}

/* Scrollbar styling for futuristic terminal look */
.futuristic-scroll::-webkit-scrollbar {
  width: 8px;
}
.futuristic-scroll::-webkit-scrollbar-track {
  background: #1e293b; /* Dark track */
}
.futuristic-scroll::-webkit-scrollbar-thumb {
  background-color: #4f46e5; /* Electric blue thumb */
  border-radius: 20px;
  border: 2px solid #0f172a; /* Border to match background */
}
`;

// --- Main Sections ---

const SectionHeader = ({ title }) => (
  <h2 className="text-3xl font-bold mb-8 text-indigo-400 uppercase tracking-widest relative pb-2">
    {title}
    <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-indigo-500 shadow-lg shadow-indigo-500/50"></span>
  </h2>
);

const SkillsBentoGrid = ({ skills }) => {
  const skillSections = [
    { title: "Backend & DevOps", icon: '⚙️', items: skills.backend },
    { title: "Languages", icon: '💻', items: skills.languages },
    { title: "Frontend & Mobile", icon: '📱', items: skills.frontend },
    { title: "CS Fundamentals", icon: '🧠', items: skills.fundamentals },
    { title: "Tools & Testing", icon: '🛠️', items: skills.tools },
  ];

  // Responsive Grid Layout
  const gridClasses = [
    "col-span-1 md:col-span-2 row-span-2",
    "col-span-1 md:col-span-1 row-span-1",
    "col-span-1 md:col-span-1 row-span-1",
    "col-span-1 md:col-span-2 row-span-1",
    "col-span-1 md:col-span-1 row-span-1",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {skillSections.map((section, index) => (
        <div
          key={section.title}
          className={`${gridClasses[index % gridClasses.length]} p-6 rounded-xl bg-gray-800/50 neon-border shadow-2xl bento-item`}
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl">{section.icon}</span>
            <h3 className="text-xl font-semibold text-white tracking-wider">{section.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {section.items.map(skill => (
              <span key={skill} className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-700/50 text-indigo-200 border border-indigo-500/50 hover:bg-indigo-600/70 transition duration-300 cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ExperienceSection = ({ experience }) => (
  <div className="space-y-8">
    {experience.map((job, index) => (
      <div key={index} className="p-6 rounded-xl bg-gray-800/40 neon-border transition duration-500 hover:bg-gray-700/50">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{job.title} <span className="text-indigo-400">@ {job.company}</span></h3>
          <span className="text-sm text-gray-400 font-mono">{job.duration}</span>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          {job.description.map((point, i) => (
            <li key={i} className="text-sm">{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ProjectsSection = ({ projects }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {projects.map((project, index) => (
      <div
        key={index}
        className="p-6 rounded-xl bg-gray-800/40 neon-border transition duration-500 hover:bg-gray-700/50 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-indigo-400 text-sm mb-4 font-mono">{project.stack}</p>

          {/* 🔥 FIXED DESCRIPTION — ALWAYS SEPARATE LINES */}
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            {Array.isArray(project.description)
              ? project.description.map((line, i) => <li key={i}>{line}</li>)
              : project.description
                  .split(/<br\s*\/?>|\n/g)
                  .map((line, i) => <li key={i}>{line.trim()}</li>)
            }
          </ul>
        </div>

        {/* 🔥 SEPARATE CODE AND DEMO BUTTONS */}
        <div className="mt-4 flex space-x-4">

          {/* CODE BUTTON */}
          <a
            href={project.code ?? userData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition text-indigo-300 flex items-center"
          >
            💻 Code
          </a>

          {/* DEMO BUTTON */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition text-white flex items-center"
            >
              🎥 Demo
            </a>
          )}

        </div>
      </div>
    ))}
  </div>
);


const AchievementsSection = ({ achievements }) => (
  <div className="grid md:grid-cols-2 gap-4">
    {achievements.map((achievement, index) => (
      <div key={index} className="p-4 rounded-lg bg-gray-800/40 border border-indigo-700/50 hover:border-indigo-500 transition duration-300 flex items-start space-x-3">
        <span className="text-indigo-400 text-lg">✦</span>
        <p className="text-sm text-gray-300">{achievement}</p>
      </div>
    ))}
  </div>
);

// --- Main App Component ---

const App = () => {
  return (
    <>
      {/* Inject custom CSS for animations and scrollbar */}
      <style>{customStyles}</style>

      <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-indigo-900 selection:text-white futuristic-scroll">
        {/* Navigation Bar (Minimalist) */}
        <header className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-sm shadow-lg shadow-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-3xl font-mono text-indigo-400 tracking-wider hover:text-indigo-300 transition duration-300 cursor-pointer">
              {userData.name}
              
            </div>
            <nav className="hidden md:flex space-x-6 text-sm">
              {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-indigo-400 transition duration-300 uppercase font-medium">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

          {/* 1. Hero Section - Futuristic & Typewriter */}
          <section id="hero" className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] pt-10">
            <div className="md:w-3/5 space-y-6">
              <p className="text-lg text-indigo-400 font-mono tracking-widest uppercase">
                &gt; Status: Online
              </p>
              <TypewriterEffect
                text={userData.name}
                className="text-6xl md:text-8xl font-extrabold text-white leading-tight"
              />
              <h2 className="text-3xl md:text-4xl font-light text-gray-300 tracking-wide mt-4">
                {userData.roles.join(' | ')}
              </h2>
              <p className="text-xl text-gray-400 max-w-lg pt-4">{userData.tagline}</p>

              <div className="flex space-x-4 pt-6">
                <a href={userData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-indigo-500 transition duration-300 neon-border">
                  <span className="text-white">LinkedIn</span>
                </a>
                <a href={userData.contact.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-700 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gray-600 transition duration-300 neon-border">
                  <span className="text-indigo-400">GitHub</span>
                </a>
                <a href={userData.contact.leetcode} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-indigo-500 transition duration-300 neon-border">
                  <span className="text-white">LeetCode</span>
                </a>
              </div>
            </div>

            {/* Image & Futuristic Frame */}
            <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <img
                  src={userData.imagePath}
                  alt={userData.name}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/1f2937/ffffff?text=AD"; }}
                  className="rounded-full w-full h-full object-cover border-4 border-indigo-500 shadow-2xl shadow-indigo-500/50 transition duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-full border-8 border-transparent animate-spin-slow"
                      style={{
                          backgroundImage: 'conic-gradient(transparent, #818cf8, transparent, #6366f1, transparent)',
                          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                      }}>
                </div>
              </div>
            </div>
          </section>

          {/* New Code Editor Simulator Section */}
          <section className="pt-8">
            <SectionHeader title="System Output" />
            <CodeEditorSimulator />
          </section>

          {/* 2. Skills Section - Bento Grid */}
          <section id="skills" className="pt-16">
            <SectionHeader title="Technical Skills" />
            <SkillsBentoGrid skills={userData.skills} />
          </section>

          {/* 3. Experience Section */}
          <section id="experience" className="pt-16">
            <SectionHeader title="Professional Experience" />
            <ExperienceSection experience={userData.experience} />
          </section>

          {/* 4. Projects Section */}
          <section id="projects" className="pt-16">
            <SectionHeader title="Personal Projects" />
            <ProjectsSection projects={userData.projects} />
          </section>

          {/* 5. Achievements Section */}
          <section id="achievements" className="pt-16">
            <SectionHeader title="Achievements and Milestones" />
            <AchievementsSection achievements={userData.achievements} />
          </section>
        </main>

        {/* Footer - Contact/System Info */}
        <footer id="contact" className="bg-gray-800/50 py-12 mt-24 neon-border border-t border-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold text-indigo-400 mb-4">CONNECT</h3>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-gray-400 text-xl">
              <p className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>{userData.contact.phone}</span>
              </p>
              <p className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v10a2 2 0 002 2h12a2 2 0 002-2V12" /></svg>
                <span>{userData.contact.email}</span>
              </p>
              <p className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{userData.contact.location}</span>
              </p>
            </div>
            <p className="mt-8 text-xl text-gray-500 font-mono">
              &copy; {new Date().getFullYear()} {userData.name}
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};
export default App;

