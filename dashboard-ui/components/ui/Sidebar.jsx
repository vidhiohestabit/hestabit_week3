import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6">
      <nav className="space-y-2">
        <Link href="/dashboard" className="block px-3 py-2 rounded-lg bg-teal-500 text-white">
          Dashboard
        </Link>

        <Link href="/dashboard/profile" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
          Profile
        </Link>

        <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
          About
        </Link>
      </nav>
    </aside>
  );
}
