import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function AboutPage() {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="text-sm text-gray-500">
          Learn more about this dashboard and its purpose
        </p>
      </div>

      {/* Intro Section */}
      <Card>
        <h2 className="text-xl font-semibold mb-2">
          Purity UI Dashboard
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          This dashboard is built using Next.js and TailwindCSS with a focus on
          reusable components, clean layouts, and scalable UI architecture.
          It follows a SaaS-first design approach inspired by modern admin
          dashboards.
        </p>
      </Card>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <Badge>UI</Badge>
          <h3 className="text-lg font-semibold mt-3 mb-2">
            Reusable Components
          </h3>
          <p className="text-sm text-gray-600">
            Atomic UI components like buttons, cards, and inputs designed for
            scalability and consistency.
          </p>
        </Card>

        <Card>
          <Badge>UX</Badge>
          <h3 className="text-lg font-semibold mt-3 mb-2">
            Clean Layout System
          </h3>
          <p className="text-sm text-gray-600">
            App Router with nested layouts ensures shared navigation and smooth
            user experience.
          </p>
        </Card>

        <Card>
          <Badge>Tech</Badge>
          <h3 className="text-lg font-semibold mt-3 mb-2">
            Modern Stack
          </h3>
          <p className="text-sm text-gray-600">
            Built with Next.js App Router and TailwindCSS for performance,
            flexibility, and maintainability.
          </p>
        </Card>
      </div>

    </div>
  );
}
