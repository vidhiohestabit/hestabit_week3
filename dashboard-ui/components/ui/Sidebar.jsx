import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6 space-y-6">

      <div>
        <p className="text-xs text-gray-400 uppercase mb-2">Main</p>
        <nav className="space-y-1">
          <Link href="/dashboard" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/dashboard/users" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
            Users
          </Link>
        </nav>
      </div>

      <div>
        <p className="text-xs text-gray-400 uppercase mb-2">Account</p>
        <nav className="space-y-1">
          <Link href="/dashboard/profile" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
            Profile
          </Link>
          <Link href="/login" className="block px-3 py-2 rounded-lg hover:bg-gray-100">
            Login
          </Link>
        </nav>
      </div>

    </aside>
  );
}
