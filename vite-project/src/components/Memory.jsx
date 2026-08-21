import { useState } from "react";

const images = [
  { src: "/Foto/Eye.jpg", alt: "Foto 1" },
  { src: "/Foto/Eater.jpg", alt: "Foto 2" },
  { src: "/Foto/Project.jpg", alt: "Foto 3" },
  { src: "/Foto/foto2.jpg", alt: "Foto 4" },
  { src: "/Foto/foto3.jpg", alt: "Foto 5" },
];

const positionClasses = [
  "z-50 scale-100 translate-x-0 translate-y-0 rotate-0 opacity-100",
  "z-40 scale-95 translate-x-6 translate-y-4 rotate-3 opacity-90",
  "z-30 scale-90 translate-x-12 translate-y-8 rotate-6 opacity-80",
  "z-20 scale-[85%] translate-x-[4.5rem] translate-y-12 rotate-[9deg] opacity-70",
  "z-10 scale-[80%] translate-x-24 translate-y-16 rotate-12 opacity-60",
];

const exitClass = "z-50 -translate-x-[120%] -rotate-12 scale-105 opacity-0";

export default function Memory() {
  const [order, setOrder] = useState(images.map((_, i) => i));
  const [exitingId, setExitingId] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const topId = order[0];
    setExitingId(topId);

    setTimeout(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setExitingId(null);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  return (
    <div className="py-20 flex flex-col items-center justify-center bg-transparent overflow-hidden">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Memory</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-bold">
          Bukan Sekadar Model: Menyimpan Memori di Antara Sudut dan Tekstur.
        </p>
      </div>

      <div className="relative w-full max-w-2xl aspect-video mx-auto mb-10">
        {order.map((imgIndex, position) => {
          const img = images[imgIndex];
          const isExiting = exitingId === imgIndex;
          const posClass =
            position < positionClasses.length
              ? positionClasses[position]
              : "z-0 scale-75 opacity-0";

          return (
            <div
              key={imgIndex}
              className={`shuffle-card absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out border-4 border-white bg-gray-800 ${
                isExiting ? exitClass : posClass
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg border-2 border-gray-600 transition duration-300 hover:scale-110 focus:outline-none"
      >
        <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}