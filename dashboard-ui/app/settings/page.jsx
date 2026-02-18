import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500">
          Manage application preferences
        </p>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4">General Settings</h3>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Email Notifications</span>
            <Button variant="secondary">Enabled</Button>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Dark Mode</span>
            <Button variant="secondary">Disabled</Button>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}
