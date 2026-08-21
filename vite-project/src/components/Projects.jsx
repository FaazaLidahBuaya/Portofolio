import { useState } from "react";
import Memory from "./Memory";
import Model3DModal from "./Model3DModal";

const smallProjects = [
  {
    image: "/Foto/Perpus.png",
    category: "Web Application",
    title: "Sistem Perpustakaan",
    description:
      "Sistem informasi perpustakaan berbasis web untuk mengelola data buku, anggota, peminjaman, dan pengembalian.",
    tags: ["PHP", "Bootstrap", "JavaScript"],
    link: "https://github.com/FaazaLidahBuaya/SistemPeminjamanBuku",
    linkLabel: "Lihat Detail",
  },
  {
    image: "/Foto/Retail.png",
    category: "Web Application",
    title: "Sistem Retail",
    description:
      "Aplikasi kasir dan manajemen toko untuk mencatat penjualan, mengelola stok barang, dan laporan keuangan.",
    tags: ["PHP", "Website", "Tailwind"],
    link: "https://github.com/FaazaLidahBuaya/Sistem-Retail",
    linkLabel: "Lihat Detail",
  },
  {
    image: "/Foto/coming soon.jpeg",
    category: "Game Development",
    title: "Silent Echoes(Coming Soon)",
    description: "Game horror dengan fokus pada atmosfer dan cerita psikologis.",
    tags: ["Unity", "C#", "Blender", "Texture"],
    link: null,
    linkLabel: "Lihat di itch.io",
  },
];

export default function Projects() {
  const [slide, setSlide] = useState(0);
  const [show3DMap, setShow3DMap] = useState(false);

  const slides = [
    {
      type: "video",
      src: "https://www.youtube.com/embed/TwZUIhXiK84?si=cdxF38fXA1oUVDkI",
    },
    { type: "image", src: "/Foto/1.png", alt: "Gameplay 1" },
    { type: "image", src: "/Foto/2.png", alt: "Gameplay 2" },
    { type: "image", src: "/Foto/3.png", alt: "Gameplay 3" },
  ];

  const thumbs = [
    { src: "/Foto/thum.png", alt: "Video Trailer", isVideo: true },
    { src: "/Foto/1.png", alt: "SS 1" },
    { src: "/Foto/2.png", alt: "SS 2" },
    { src: "/Foto/3.png", alt: "SS 3" },
  ];

  return (
    <section id="Project" className="py-24 bg-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-bold">
            Beberapa proyek yang telah saya kerjakan, mulai dari game development hingga aplikasi web.
          </p>
        </div>

        {/* Featured Project */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-200 p-4 md:p-6 mb-8 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/5 flex flex-col gap-4 overflow-hidden">
            {/* Layar Utama (Slider) */}
            <div className="rounded-2xl overflow-hidden bg-gray-900 aspect-video relative shadow-sm border border-gray-200">
              <div
                className="flex w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {slides.map((item, index) =>
                  item.type === "video" ? (
                    <div key={index} className="min-w-full h-full flex-shrink-0 relative">
                      <iframe
                        className="w-full h-full absolute inset-0"
                        src={item.src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div key={index} className="min-w-full h-full flex-shrink-0 bg-gray-800">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Thumbnail */}
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {thumbs.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSlide(index)}
                  className={`rounded-xl overflow-hidden aspect-video bg-gray-800 border-2 transition-all duration-300 cursor-pointer relative group ${
                    slide === index ? "border-yellow-500 opacity-100" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  {thumb.isVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                      <svg className="w-6 h-6 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                  <img src={thumb.src} alt={thumb.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-sm font-semibold text-gray-700 w-max mb-5">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Project
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Gaoleh</h2>
            <p className="text-gray-500 font-medium mb-4">Horror psychology</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Game horror psychology orang pertama yang berlatar di rumah lama penuh misteri. Pemain harus
              memecahkan teka-teki dan mengungkap rahasia kelam yang tersembunyi pada setiap Ending yang ada.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Unity", "C#", "Blender", "Google Voice", "Texture"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://faza-achmad.itch.io/gaoleh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-medium transition duration-200 hover:translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Lihat di itch.io
              </a>
              <button
                onClick={() => setShow3DMap(true)}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-medium transition duration-200 hover:translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
                Lihat Map 3D
              </button>
            </div>
          </div>
        </div>

        {/* Grid Projects Kecil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-200 flex flex-col"
            >
              <div className="rounded-2xl overflow-hidden mb-5 bg-gray-100 aspect-[4/3]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold mb-3">
                {project.category === "Game Development" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                )}
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 w-max transition duration-200 hover:translate-y-1"
                >
                  {project.linkLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              ) : (
                <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 w-max transition duration-200">
                  {project.linkLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Memory />

      <Model3DModal isOpen={show3DMap} onClose={() => setShow3DMap(false)} />
    </section>
  );
}