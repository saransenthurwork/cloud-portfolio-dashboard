import { Loader2 } from "lucide-react";
import { cn } from "../../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white",

    secondary:
      "bg-[var(--surface-2)] border border-[var(--border)] hover:bg-[#1d2430]",

    ghost:
      "hover:bg-[var(--surface-2)]",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      disabled={loading || disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-xl px-5 py-2.5",
        "font-medium",
        "transition-all duration-200",
        "disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {loading && <Loader2 size={18} className="animate-spin" />}

      {children}
    </button>
  );
}