import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-16 space-y-6">
      <Card>
        <h2 className="text-xl font-semibold mb-2">Login</h2>
        <p className="text-sm text-gray-500 mb-6">
          Welcome back! Please login to continue
        </p>

        <div className="space-y-4">
          <Input placeholder="Username or Email" />
          <Input placeholder="Password" type="password" />
        </div>

        <div className="mt-6">
          <Button className="w-full">Login</Button>
        </div>
      </Card>
    </div>
  );
}
