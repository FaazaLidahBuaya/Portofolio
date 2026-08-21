export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100]">
      <div className="flex bg-black/30 backdrop-blur-md rounded-full px-2 md:px-6 py-2 text-white shadow-md border border-white/10">
        <a href="#Home" className="px-2 md:px-4 cursor-pointer group">
          <span className="relative">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
        <a href="#about" className="px-2 md:px-4 cursor-pointer group">
          <span className="relative">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
        <a href="#Project" className="px-2 md:px-4 cursor-pointer group">
          <span className="relative">
            Project
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </a>
      </div>
    </nav>
  );
}