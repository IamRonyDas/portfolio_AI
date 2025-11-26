import userData from "../data/userdata";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-gray-900/90 px-6 py-4 backdrop-blur-sm shadow-lg shadow-indigo-900/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-mono text-indigo-400 tracking-wider">
          {userData.name}
        </div>

        <nav className="hidden md:flex space-x-6 text-sm">
          {["Skills", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-indigo-400 uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
