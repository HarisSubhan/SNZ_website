import { useLocation } from "@tanstack/react-router";

export function WhatsAppFab() {
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;
  return (
    <a
      href="https://wa.me/37060305146?text=Hi%20SNZ%2C%20I%27d%20like%20to%20talk%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SNZ on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex flex-row-reverse items-center gap-3"
    >
      <span
        className="relative size-14 rounded-full grid place-items-center text-white shadow-[0_14px_34px_-10px_oklch(0.62_0.18_150/0.6)] transition-transform group-hover:scale-105"
        style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 150), oklch(0.55 0.16 150))" }}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "oklch(0.72 0.18 150 / 0.35)", animationDuration: "2.4s" }}
        />
        <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden className="relative">
          <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.379.696 4.59 1.892 6.45L4 29l7.74-1.857A11.93 11.93 0 0 0 16.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3zm0 21.6c-1.74 0-3.443-.47-4.929-1.358l-.353-.21-4.59 1.103 1.117-4.486-.23-.367A9.55 9.55 0 0 1 6.4 15c0-5.293 4.31-9.6 9.603-9.6 5.293 0 9.597 4.307 9.597 9.6 0 5.293-4.304 9.6-9.597 9.6zm5.527-7.18c-.303-.152-1.793-.886-2.07-.987-.277-.101-.479-.152-.681.152s-.782.987-.96 1.19c-.176.202-.353.227-.656.076-.303-.152-1.28-.472-2.439-1.503-.902-.804-1.51-1.795-1.687-2.099-.176-.303-.019-.467.133-.618.137-.136.303-.354.455-.531.151-.177.202-.303.303-.505.101-.202.05-.379-.025-.531-.076-.152-.681-1.642-.934-2.247-.246-.59-.496-.51-.681-.519l-.581-.01c-.202 0-.531.076-.81.379-.277.303-1.06 1.035-1.06 2.525s1.084 2.929 1.235 3.131c.151.202 2.136 3.26 5.176 4.572.723.312 1.286.498 1.725.638.725.231 1.385.198 1.906.12.582-.087 1.793-.733 2.046-1.44.253-.708.253-1.314.177-1.44-.076-.126-.277-.202-.581-.354z"/>
        </svg>
      </span>
      <span className="hidden md:inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all bg-background border border-foreground/15 px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg">
        Chat on WhatsApp
      </span>
    </a>
  );
}