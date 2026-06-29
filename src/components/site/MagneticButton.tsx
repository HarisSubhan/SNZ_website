import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";

type Common = {
  children: ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
};

function bindMagnet(radius: number, strength: number) {
  return {
    onMouseMove: (e: MouseEvent<HTMLElement>) => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        el.style.transform = "translate3d(0,0,0)";
        return;
      }
      el.style.transform = `translate3d(${(dx * strength).toFixed(2)}px, ${(dy * strength).toFixed(2)}px, 0)`;
    },
    onMouseLeave: (e: MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = "translate3d(0,0,0)";
    },
  };
}

export function MagneticLink({
  to,
  children,
  className = "",
  radius = 90,
  strength = 0.25,
}: Common & { to: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const handlers = bindMagnet(radius, strength);
  return (
    <Link
      to={to}
      ref={ref}
      className={"inline-block transition-transform duration-300 ease-out will-change-transform " + className}
      {...handlers}
    >
      {children}
    </Link>
  );
}

export function MagneticButton({
  children,
  className = "",
  radius = 90,
  strength = 0.25,
  onClick,
  type = "button",
}: Common & { onClick?: () => void; type?: "button" | "submit" }) {
  const handlers = bindMagnet(radius, strength);
  return (
    <button
      type={type}
      onClick={onClick}
      className={"inline-block transition-transform duration-300 ease-out will-change-transform " + className}
      {...handlers}
    >
      {children}
    </button>
  );
}