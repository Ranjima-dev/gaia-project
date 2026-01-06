import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    size?: "sm";
    variant?: ButtonVariant;
}

export default function Button({
    children,
    fullWidth = true,
    size = "sm",
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                "rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",

                // Size
                size === "sm" && "text-sm px-4 py-2.5",

                // Width
                fullWidth && "w-full",

                // Variants
                variant === "primary" &&
                "bg-[var(--button-primary)] text-white hover:bg-indigo-700",

                variant === "outline" &&
                "border border-[var(--button-primary)] text-[var(--button-primary)] hover:bg-indigo-50",

                variant === "ghost" &&
                "text-[var(--button-primary)] hover:bg-indigo-50",

                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
