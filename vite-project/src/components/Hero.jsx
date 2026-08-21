export default function Hero() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Ingat: autoPlay dan playsInline menggunakan huruf kapital di React */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/vd/BG2.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 text-center px-4">
        <p className="text-white text-2xl md:text-3xl font-bold">
          Hi, I'm Faza | Programmer & 3D Modeling
        </p>
        <p className="text-white text-base md:text-lg font-semibold">
          Welcome to my personal website
        </p>
      </div>
    </header>
  );
}