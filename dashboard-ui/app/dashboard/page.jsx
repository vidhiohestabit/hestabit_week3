import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card>
          <p className="text-sm text-gray-500">Today's Money</p>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-semibold">$53,000</h3>
            <Badge>+55%</Badge>
          </div>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">Today's Users</p>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-semibold">2,300</h3>
            <Badge>+5%</Badge>
          </div>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">New Clients</p>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-semibold">3,052</h3>
            <Badge>-14%</Badge>
          </div>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">Total Sales</p>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-2xl font-semibold">$173,000</h3>
            <Badge>+8%</Badge>
          </div>
        </Card>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Welcome Card */}
        <div className="xl:col-span-2">
          <Card>
            <p className="text-sm text-gray-500 mb-2">Built by developers</p>
            <h2 className="text-xl font-semibold mb-2">
              Purity UI Dashboard
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              From colors, cards, typography to complex elements,
              you will find the full documentation.
            </p>
            <button className="text-teal-500 text-sm font-medium">
              Read more →
            </button>
          </Card>
        </div>

        {/* Info Card */}
        <Card>
          <h3 className="text-lg font-semibold mb-2">
            Work with the Rockets
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Wealth creation is a positive-sum game. It is all about
            who takes the opportunity first.
          </p>
          <button className="text-teal-500 text-sm font-medium">
            Read more →
          </button>
        </Card>
      </div>

    </div>
  );
}
