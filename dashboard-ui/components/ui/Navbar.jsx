import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      
      {/* Left: Logo / Title */}
      <h1 className="text-lg font-semibold">
        Purity UI Dashboard
      </h1>

      {/* Right: Navigation */}
      <nav className="flex items-center gap-6 text-sm font-medium">
        

        <Link
          href="/settings"
          className="text-gray-600 hover:text-teal-500"
        >
          Settings
        </Link>

        <Link
          href="/signin"
          className="px-3 py-1 rounded-lg border border-teal-500 text-teal-500 hover:bg-teal-50"
        >
          Sign In
        </Link>

        <Link
          href="/login"
          className="px-3 py-1 rounded-lg bg-teal-500 text-white hover:bg-teal-600"
        >
          Login
        </Link>
      </nav>

    </header>
  );
}
