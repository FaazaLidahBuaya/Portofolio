import { useEffect, useRef, useState } from "react";

export default function About() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef(null);
  const fullText = "I'm someone who's interested in programming and 3D modeling. I dream of creating my own website. 3D modeling allows me to unleash my creativity, creating a world or object.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedText === "") {
          setIsTyping(true);
          let i = 0;
          const timer = setInterval(() => {
            setDisplayedText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) {
              clearInterval(timer);
              setIsTyping(false);
            }
          }, 50);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, [displayedText]);

  return (
    <section className="py-20 md:py-20 bg-gray-500" id="about">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start px-4 my-32">
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-center font-bold text-3xl md:text-4xl text-white shadow-xl bg-black/15 rounded-xl py-3 px-2">
            Faza Achmad T.
          </h1>
          <div className="py-1 bg-black/15 rounded-full my-4 shadow-xl"></div>
          <div className="flex justify-center md:justify-start">
            <a href="https://github.com/FaazaLidahBuaya" target="_blank" rel="noopener noreferrer">
              <img src="/Foto/github.png" className="w-12 h-12 mx-2" alt="GitHub" />
            </a>
            <a href="https://instagram.com/tfaaz_" target="_blank" rel="noopener noreferrer">
              <img src="/Foto/ig.png" className="w-12 h-12 mx-2" alt="Instagram" />
            </a>
            <a href="https://youtu.be/xvFZjo5PgG0?si=npVVp_EOKBPOCCfr" target="_blank" rel="noopener noreferrer">
              <img src="/Foto/fb.png" className="w-12 h-12 mx-2" alt="Facebook" />
            </a>
          </div>
          <div className="my-6 flex flex-col sm:flex-row gap-3">
            <button className="whitespace-nowrap bg-black hover:bg-black/20 text-white font-bold px-6 sm:px-10 md:px-20 py-3 rounded-xl transition duration-200 shadow-xl">
              Download CV
            </button>
            <a href="mailto:fazaachmadtaufiqiy@gmail.com" className="whitespace-nowrap text-center bg-gray-400 hover:bg-gray-400/20 text-black font-bold px-6 sm:px-10 py-3 rounded-xl transition duration-200 shadow-xl">
              Gmail
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative mb-4 mx-auto w-full max-w-sm">
            <div className="hidden md:block absolute inset-0 bg-gray-300 rounded-xl shadow-xl transform rotate-12 translate-x-8"></div>
            <div className="hidden md:block absolute inset-0 bg-gray-400 rounded-xl shadow-xl transform rotate-6 translate-x-4"></div>
            <img src="/Foto/Guah.jpg" alt="Foto Faza" className="relative rounded-xl shadow-xl mx-auto" />
          </div>
          <p className="bg-black/15 rounded-xl px-3 py-3 shadow-xl text-lg md:text-xl text-white text-center md:text-left min-h-[180px] md:min-h-[150px]">
            <span ref={textRef} style={{ borderRight: isTyping ? '0.15em solid orange' : 'none' }}>
              {displayedText}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}