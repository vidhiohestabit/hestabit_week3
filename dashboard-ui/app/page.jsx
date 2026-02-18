import Card from "../components/ui/Card";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card>
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-3xl font-semibold">
            Welcome to Purity UI Dashboard
          </h1>

          <p className="text-gray-600 text-sm">
            A modern SaaS-style dashboard built using Next.js App Router and
            TailwindCSS. This project focuses on clean layouts, reusable UI
            components, and scalable frontend architecture.
          </p>

          <p className="text-sm text-gray-500">
            Use the navigation bar above to explore the dashboard, manage your
            profile, update settings, or sign in.
          </p>
        </div>
      </Card>
    </div>
  );
}
