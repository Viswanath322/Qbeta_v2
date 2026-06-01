import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "horizontal" | "icon";
  className?: string;
  iconClassName?: string;
}

export function SilicofellerLogo({
  variant = "horizontal",
  className,
  iconClassName,
}: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/logo.webp"
        alt="Silicofeller x NVIDIA"
        className={cn("h-10 w-auto object-contain", iconClassName)}
      />
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.webp"
      alt="Silicofeller x NVIDIA"
      className={cn("h-12 w-auto object-contain", className)}
    />
  );
}