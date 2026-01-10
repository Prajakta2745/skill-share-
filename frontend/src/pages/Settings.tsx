import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    User,
    BookOpen,
    Calendar,
    Bell,
    Lock,
    AlertTriangle,
    X,
    Plus,
    Upload,
    LogOut,
    ChevronRight,
    Check,
    Clock,
    Eye,
    Download,
    Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

type SettingsTab = "profile" | "skills" | "availability" | "notifications" | "privacy" | "account";

interface Skill {
    id: number;
    name: string;
    type: "teach" | "learn";
}

const Settings = () => {
    const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
    const [profileData, setProfileData] = useState({
        firstName: "Prajakta",
        lastName: "Sharma",
        email: "prajakta@example.com",
        location: "San Francisco, CA",
        bio: "Learning Python and web development. Love teaching others!",
        avatar: "👤",
    });

    const [skills, setSkills] = useState<Skill[]>([
        { id: 1, name: "Python", type: "teach" },
        { id: 2, name: "Web Development", type: "teach" },
        { id: 3, name: "Machine Learning", type: "learn" },
        { id: 4, name: "UI/UX Design", type: "learn" },
    ]);

    const [newSkill, setNewSkill] = useState("");
    const [newSkillType, setNewSkillType] = useState<"teach" | "learn">("teach");

    const [availability, setAvailability] = useState({
        monday: { start: "09:00", end: "17:00", enabled: true },
        tuesday: { start: "09:00", end: "17:00", enabled: true },
        wednesday: { start: "09:00", end: "17:00", enabled: true },
        thursday: { start: "09:00", end: "17:00", enabled: true },
        friday: { start: "09:00", end: "17:00", enabled: true },
        saturday: { start: "14:00", end: "20:00", enabled: true },
        sunday: { start: "14:00", end: "20:00", enabled: false },
    });

    const [notifications, setNotifications] = useState({
        messages: true,
        bookingReminders: true,
        mentorRecommendations: true,
        communityUpdates: false,
        weeklyDigest: true,
        sessionFeedback: true,
    });

    const [privacy, setPrivacy] = useState({
        hideProfile: false,
        skillExchangeOnly: false,
        allowMessages: true,
        allowReviews: true,
    });

    const handleProfileChange = (field: keyof typeof profileData, value: string) => {
        setProfileData((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddSkill = () => {
        if (newSkill.trim()) {
            setSkills((prev) => [
                ...prev,
                { id: Date.now(), name: newSkill, type: newSkillType },
            ]);
            setNewSkill("");
            toast.success(`Added "${newSkill}" to ${newSkillType} list`);
        }
    };

    const handleRemoveSkill = (id: number) => {
        setSkills((prev) => prev.filter((s) => s.id !== id));
        toast.success("Skill removed");
    };

    const handleAvailabilityChange = (
        day: keyof typeof availability,
        field: "start" | "end" | "enabled",
        value: any
    ) => {
        setAvailability((prev) => ({
            ...prev,
            [day]: { ...prev[day], [field]: value },
        }));
    };

    const handleSaveProfile = () => {
        toast.success("Profile updated successfully!");
    };

    const handleChangePassword = () => {
        toast.success("Password changed successfully!");
    };

    const handleDeleteAccount = () => {
        toast.error("Account deletion is not reversible. Please contact support.");
    };

    const renderProfileSettings = () => (
        <Card className="p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>

            <div className="space-y-6">
                {/* Avatar */}
                <div>
                    <Label className="text-base font-semibold mb-3 block">Profile Picture</Label>
                    <div className="flex items-center gap-4">
                        <div className="text-5xl">{profileData.avatar}</div>
                        <Button variant="outline" className="gap-2">
                            <Upload className="h-4 w-4" />
                            Upload Photo
                        </Button>
                    </div>
                </div>

                {/* Name */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            value={profileData.firstName}
                            onChange={(e) => handleProfileChange("firstName", e.target.value)}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            value={profileData.lastName}
                            onChange={(e) => handleProfileChange("lastName", e.target.value)}
                            className="mt-2"
                        />
                    </div>
                </div>

                {/* Email and Location */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => handleProfileChange("email", e.target.value)}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => handleProfileChange("location", e.target.value)}
                            className="mt-2"
                        />
                    </div>
                </div>

                {/* Bio */}
                <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => handleProfileChange("bio", e.target.value)}
                        placeholder="Tell others about yourself..."
                        className="mt-2 min-h-24"
                    />
                </div>

                <Button
                    onClick={handleSaveProfile}
                    className="bg-secondary hover:bg-secondary/90 text-foreground w-full md:w-auto"
                >
                    <Check className="h-4 w-4 mr-2" />
                    Save Changes
                </Button>
            </div>
        </Card>
    );

    const renderSkillsSettings = () => (
        <Card className="p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Skills Management</h2>

            <div className="space-y-6">
                {/* Add Skill */}
                <div className="p-4 bg-muted/30 rounded-lg">
                    <Label className="text-base font-semibold mb-3 block">Add New Skill</Label>
                    <div className="flex gap-2 mb-3">
                        <Input
                            placeholder="Enter skill name..."
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                        />
                        <select
                            value={newSkillType}
                            onChange={(e) => setNewSkillType(e.target.value as "teach" | "learn")}
                            className="px-3 py-2 border rounded-md bg-background"
                        >
                            <option value="teach">Teach</option>
                            <option value="learn">Learn</option>
                        </select>
                        <Button
                            onClick={handleAddSkill}
                            className="bg-primary hover:bg-primary/90 gap-2"
                        >
                            <Plus className="h-4 w-4" />
                            Add
                        </Button>
                    </div>
                </div>

                {/* Skills I Teach */}
                <div>
                    <Label className="text-base font-semibold mb-3 block flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Skills I Teach
                    </Label>
                    <div className="flex flex-wrap gap-2">
                        {skills
                            .filter((s) => s.type === "teach")
                            .map((skill) => (
                                <Badge
                                    key={skill.id}
                                    variant="outline"
                                    className="px-3 py-2 text-sm flex items-center gap-2"
                                >
                                    <span>{skill.name}</span>
                                    <button
                                        onClick={() => handleRemoveSkill(skill.id)}
                                        className="hover:text-destructive"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </Badge>
                            ))}
                    </div>
                </div>

                {/* Skills I Want to Learn */}
                <div>
                    <Label className="text-base font-semibold mb-3 block flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-secondary" />
                        Skills I Want to Learn
                    </Label>
                    <div className="flex flex-wrap gap-2">
                        {skills
                            .filter((s) => s.type === "learn")
                            .map((skill) => (
                                <Badge
                                    key={skill.id}
                                    variant="outline"
                                    className="px-3 py-2 text-sm flex items-center gap-2"
                                >
                                    {skill.name}
                                    <button
                                        onClick={() => handleRemoveSkill(skill.id)}
                                        className="hover:text-destructive"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </Badge>
                            ))}
                    </div>
                </div>
            </div>
        </Card>
    );

    const renderAvailabilitySettings = () => (
        <Card className="p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Availability</h2>

            <div className="space-y-4">
                {Object.entries(availability).map(([day, times]) => (
                    <div
                        key={day}
                        className="p-4 border rounded-lg flex items-center justify-between"
                    >
                        <div className="flex-1">
                            <Label className="font-semibold capitalize">{day}</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Switch
                                checked={times.enabled}
                                onCheckedChange={(checked) =>
                                    handleAvailabilityChange(day as any, "enabled", checked)
                                }
                            />
                            {times.enabled && (
                                <div className="flex items-center gap-2">
                                    <Input
                                        type="time"
                                        value={times.start}
                                        onChange={(e) =>
                                            handleAvailabilityChange(day as any, "start", e.target.value)
                                        }
                                        className="w-32"
                                    />
                                    <span className="text-muted-foreground">to</span>
                                    <Input
                                        type="time"
                                        value={times.end}
                                        onChange={(e) =>
                                            handleAvailabilityChange(day as any, "end", e.target.value)
                                        }
                                        className="w-32"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-foreground">
                <Check className="h-4 w-4 mr-2" />
                Save Availability
            </Button>
        </Card>
    );

    const renderNotificationSettings = () => (
        <Card className="p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>

            <div className="space-y-4">
                {Object.entries(notifications).map(([key, enabled]) => (
                    <div
                        key={key}
                        className="flex items-center justify-between p-3 border rounded-lg"
                    >
                        <div>
                            <Label className="font-medium capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                                {key === "messages" && "Get notified of new messages"}
                                {key === "bookingReminders" && "Reminders for upcoming sessions"}
                                {key === "mentorRecommendations" && "Personalized mentor suggestions"}
                                {key === "communityUpdates" && "Updates from the community"}
                                {key === "weeklyDigest" && "Weekly learning summary"}
                                {key === "sessionFeedback" && "Feedback from completed sessions"}
                            </p>
                        </div>
                        <Switch
                            checked={enabled}
                            onCheckedChange={(checked) =>
                                setNotifications((prev) => ({
                                    ...prev,
                                    [key]: checked,
                                }))
                            }
                        />
                    </div>
                ))}
            </div>

            <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-foreground">
                <Check className="h-4 w-4 mr-2" />
                Save Preferences
            </Button>
        </Card>
    );

    const renderPrivacySettings = () => (
        <Card className="p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Privacy & Safety</h2>

            <div className="space-y-4">
                {Object.entries(privacy).map(([key, enabled]) => (
                    <div
                        key={key}
                        className="flex items-center justify-between p-3 border rounded-lg"
                    >
                        <div>
                            <Label className="font-medium capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                                {key === "hideProfile" && "Make your profile private"}
                                {key === "skillExchangeOnly" && "Only accept skill exchanges"}
                                {key === "allowMessages" && "Allow direct messages from others"}
                                {key === "allowReviews" && "Allow others to leave reviews"}
                            </p>
                        </div>
                        <Switch
                            checked={enabled}
                            onCheckedChange={(checked) =>
                                setPrivacy((prev) => ({
                                    ...prev,
                                    [key]: checked,
                                }))
                            }
                        />
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex gap-3">
                    <Eye className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                        <p className="font-medium text-sm text-blue-900">Data Privacy</p>
                        <p className="text-sm text-blue-800 mt-1">
                            Your data is encrypted and secure. Learn more about our privacy policy.
                        </p>
                    </div>
                </div>
            </div>

            <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-foreground">
                <Check className="h-4 w-4 mr-2" />
                Save Privacy Settings
            </Button>
        </Card>
    );

    const renderAccountSettings = () => (
        <div className="space-y-6">
            {/* Change Password */}
            <Card className="p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Change Password
                </h2>

                <div className="space-y-4">
                    <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" className="mt-2" />
                    </div>

                    <Button
                        onClick={handleChangePassword}
                        className="bg-primary hover:bg-primary/90"
                    >
                        Update Password
                    </Button>
                </div>
            </Card>

            {/* Download Data */}
            <Card className="p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Your Data
                </h2>
                <p className="text-muted-foreground mb-4">
                    Download a copy of your personal data in a portable format.
                </p>
                <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Data
                </Button>
            </Card>

            {/* Danger Zone */}
            <Card className="p-6 shadow-sm border-destructive/50">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                    Danger Zone
                </h2>

                <p className="text-muted-foreground mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                </p>

                <Button
                    variant="destructive"
                    onClick={handleDeleteAccount}
                    className="gap-2"
                >
                    <Trash2 className="h-4 w-4" />
                    Delete Account
                </Button>
            </Card>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Settings</h1>
                    <p className="text-muted-foreground">Manage your account and preferences</p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Left Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <Card className="p-2 shadow-sm sticky top-24">
                            <nav className="space-y-1">
                                {[
                                    { id: "profile", label: "Profile", icon: User },
                                    { id: "skills", label: "Skills", icon: BookOpen },
                                    { id: "availability", label: "Availability", icon: Calendar },
                                    { id: "notifications", label: "Notifications", icon: Bell },
                                    { id: "privacy", label: "Privacy", icon: Lock },
                                    { id: "account", label: "Account", icon: User },
                                ].map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as SettingsTab)}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${activeTab === tab.id
                                                ? "bg-primary text-primary-foreground"
                                                : "hover:bg-muted text-foreground/80"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon className="h-4 w-4" />
                                                <span className="font-medium text-sm">{tab.label}</span>
                                            </div>
                                            {activeTab === tab.id && <ChevronRight className="h-4 w-4" />}
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="border-t mt-4 pt-4">
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Right Settings Panel */}
                    <div className="lg:col-span-3">
                        {activeTab === "profile" && renderProfileSettings()}
                        {activeTab === "skills" && renderSkillsSettings()}
                        {activeTab === "availability" && renderAvailabilitySettings()}
                        {activeTab === "notifications" && renderNotificationSettings()}
                        {activeTab === "privacy" && renderPrivacySettings()}
                        {activeTab === "account" && renderAccountSettings()}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Settings;
