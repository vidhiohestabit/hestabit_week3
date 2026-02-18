import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function ProfilePage() {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-sm text-gray-500">
          Manage your personal information
        </p>
      </div>

      {/* Profile Header */}
      <Card>
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-semibold">
            V
          </div>

          <div>
            <h2 className="text-xl font-semibold">Vidhi Omer</h2>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
        </div>
      </Card>

      {/* Profile Form */}
      <Card>
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="First Name" value="Vidhi" readOnly />
          <Input placeholder="Last Name" value="Omer" readOnly />
          <Input placeholder="Email Address" value="vidhi@example.com" readOnly />
          <Input placeholder="Phone Number" value="+91 9876543210" readOnly />
        </div>

        <div className="mt-6 flex justify-end">
          <Button>Edit Profile</Button>
        </div>
      </Card>

    </div>
  );
}
