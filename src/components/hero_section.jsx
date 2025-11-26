import TypewriterEffect from "../hooks/typewriterEffect";
import userData from "../data/userdata";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] pt-10">
      <div className="md:w-3/5 space-y-6">
        <p className="text-lg text-indigo-400 font-mono uppercase">
          &gt; Status: Online
        </p>

        <TypewriterEffect
          text={userData.name}
          className="text-6xl md:text-8xl font-extrabold text-white leading-tight"
        />

        <h2 className="text-3xl text-gray-300">
          {userData.roles.join(" | ")}
        </h2>

        <p className="text-xl text-gray-400 max-w-lg pt-4">{userData.tagline}</p>

        <div className="flex space-x-4 pt-6">
          <a
            href={userData.contact.linkedin}
            target="_blank"
            className="px-6 py-3 bg-indigo-600 rounded-full font-bold hover:bg-indigo-500"
          >
            LinkedIn
          </a>
          <a
            href={userData.contact.github}
            target="_blank"
            className="px-6 py-3 bg-gray-700 rounded-full font-bold hover:bg-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
        <img
          src={userData.imagePath}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-500 shadow-2xl"
          alt=""
        />
      </div>
    </section>
  );
}
