import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="text-[48px] font-bold text-[var(--auth-title)]">
                404
            </h1>

            <p className="mt-2 text-[16px] text-[var(--auth-subtitle)]">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                href="/sign-in"
                className="mt-6 text-[var(--button-primary)] font-medium"
            >
                Go back to Sign In
            </Link>
        </div>
    );
}
