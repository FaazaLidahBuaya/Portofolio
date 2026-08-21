import { useEffect, useRef, useState } from "react";

export default function Model3DModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleLoad = () => setIsLoading(false);
    const handleError = () => setHasError(true);

    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("error", handleError);
    return () => {
      viewer.removeEventListener("load", handleLoad);
      viewer.removeEventListener("error", handleError);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>

      <div
        className={`relative w-full max-w-5xl h-[80vh] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[80] p-2 bg-black/50 hover:bg-black rounded-full text-white transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {!hasError && (
          <div
            className={`absolute inset-0 z-[70] flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-500 ${
              isLoading ? "" : "opacity-0 hidden"
            }`}
          >
            <svg
              className="animate-spin h-14 w-14 text-yellow-500 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-gray-300 text-sm font-semibold animate-pulse tracking-widest">
              MEMUAT ASET 3D...
            </span>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 z-[70] flex flex-col items-center justify-center bg-gray-900">
            <span className="text-red-500 text-sm font-semibold tracking-widest">GAGAL MEMUAT ASET 3D</span>
          </div>
        )}

        {isOpen && (
          <model-viewer
            ref={viewerRef}
            id="myModelViewer"
            src="/Model/Rumahfix.glb"
            alt="Map 3D Rumah Lama"
            auto-rotate
            camera-controls
            className="w-full h-full outline-none"
            shadow-intensity="1"
          ></model-viewer>
        )}

        <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-[60]">
          <p className="text-white text-sm bg-black/50 inline-block px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
            Gunakan kursor atau sentuhan untuk memutar & zoom
          </p>
        </div>
      </div>
    </div>
  );
}