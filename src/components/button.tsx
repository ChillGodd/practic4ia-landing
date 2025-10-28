import * as React from "react";
import { clsx } from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  variant = "solid",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  } as const;

  const variants = {
    solid:
      "bg-[#E63946] text-white border-2 border-transparent hover:bg-[#d42838] focus:ring-[#E63946]",
    outline:
      // 👉 Borde blanco + fondo transparente (lo que quieres)
      "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white/70",
    ghost:
      "bg-transparent text-[#1A1A1A] hover:bg-black/5 focus:ring-black/20",
  } as const;

  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}
