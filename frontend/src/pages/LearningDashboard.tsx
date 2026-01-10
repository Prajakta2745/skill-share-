import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Award,
    Flame,
    Zap,
    TrendingUp,
    BookOpen,
    Target,
    Users,
    Calendar,
    Clock,
} from "lucide-react";

interface SkillCard {
    id: number;
    name: string;
    icon: string;
    progress: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    lastSession: string;
    totalHours: number;
}

interface Achievement {
    id: number;
    title: string;
    description: string;
    icon: string;
    earned: boolean;
    progress?: number;
}

interface ActivityData {
    day: string;
    hours: number;
}

const LearningDashboard = () => {
    const [selectedSkill, setSelectedSkill] = useState<number>(1);

    const skills: SkillCard[] = [
        {
            id: 1,
            name: "Python Programming",
            icon: "🐍",
            progress: 65,
            level: "Intermediate",
            lastSession: "2 days ago",
            totalHours: 24,
        },
        {
            id: 2,
            name: "Web Development",
            icon: "🌐",
            progress: 45,
            level: "Beginner",
            lastSession: "1 week ago",
            totalHours: 12,
        },
        {
            id: 3,
            name: "Data Science",
            icon: "📊",
            progress: 55,
            level: "Intermediate",
            lastSession: "3 days ago",
            totalHours: 18,
        },
        {
            id: 4,
            name: "Machine Learning",
            icon: "🤖",
            progress: 30,
            level: "Beginner",
            lastSession: "1 day ago",
            totalHours: 8,
        },
        {
            id: 5,
            name: "UI/UX Design",
            icon: "🎨",
            progress: 72,
            level: "Advanced",
            lastSession: "Yesterday",
            totalHours: 32,
        },
        {
            id: 6,
            name: "Digital Marketing",
            icon: "📱",
            progress: 40,
            level: "Beginner",
            lastSession: "5 days ago",
            totalHours: 10,
        },
    ];

    const activityData: ActivityData[] = [
        { day: "Mon", hours: 2 },
        { day: "Tue", hours: 3 },
        { day: "Wed", hours: 1 },
        { day: "Thu", hours: 4 },
        { day: "Fri", hours: 2 },
        { day: "Sat", hours: 5 },
        { day: "Sun", hours: 3 },
    ];

    const achievements: Achievement[] = [
        {
            id: 1,
            title: "Completed 5 Sessions",
            description: "Attend 5 learning sessions",
            icon: "🎯",
            earned: true,
        },
        {
            id: 2,
            title: "Active Learner",
            description: "Learn for 7 days straight",
            icon: "🔥",
            earned: true,
        },
        {
            id: 3,
            title: "Consistency Master",
            description: "Maintain 30-day streak",
            icon: "⚡",
            earned: false,
            progress: 18,
        },
        {
            id: 4,
            title: "Skill Exchange Champion",
            description: "Help 10 students learn",
            icon: "👥",
            earned: false,
            progress: 6,
        },
        {
            id: 5,
            title: "Knowledge Seeker",
            description: "Learn 5 different skills",
            icon: "📚",
            earned: true,
        },
        {
            id: 6,
            title: "Mentor Appreciator",
            description: "Leave 5 mentor reviews",
            icon: "⭐",
            earned: false,
            progress: 3,
        },
    ];

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Beginner":
                return "bg-blue-100 text-blue-800";
            case "Intermediate":
                return "bg-amber-100 text-amber-800";
            case "Advanced":
                return "bg-green-100 text-green-800";
            default:
                return "bg-muted";
        }
    };

    const totalProgress =
        Math.round((skills.reduce((sum, skill) => sum + skill.progress, 0) / skills.length) * 10) / 10;
    const totalHours = skills.reduce((sum, skill) => sum + skill.totalHours, 0);

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Learning Dashboard</h1>
                    <p className="text-muted-foreground">Track your learning progress and achievements</p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Card className="p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Overall Progress</p>
                                <p className="text-2xl font-bold">{totalProgress}%</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </Card>

                    <Card className="p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Total Hours</p>
                                <p className="text-2xl font-bold">{totalHours}h</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                <Clock className="h-6 w-6 text-secondary" />
                            </div>
                        </div>
                    </Card>

                    <Card className="p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Skills Learning</p>
                                <p className="text-2xl font-bold">{skills.length}</p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <BookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </Card>

                    <Card className="p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Badges Earned</p>
                                <p className="text-2xl font-bold">
                                    {achievements.filter((a) => a.earned).length}/{achievements.length}
                                </p>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                                <Award className="h-6 w-6 text-amber-600" />
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Skill Progress Cards */}
                        <Card className="p-6 shadow-sm">
                            <h2 className="text-xl font-semibold mb-6">Your Skills</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {skills.map((skill) => (
                                    <button
                                        key={skill.id}
                                        onClick={() => setSelectedSkill(skill.id)}
                                        className={`p-4 rounded-lg border-2 text-left transition ${selectedSkill === skill.id
                                            ? "border-primary bg-primary/5"
                                            : "border-border hover:border-primary/50"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <div>
                                                    <p className="font-semibold text-sm">{skill.name}</p>
                                                    <p className="text-xs text-muted-foreground">{skill.totalHours}h invested</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs font-medium">Progress</span>
                                                <span className="text-xs font-semibold text-primary">{skill.progress}%</span>
                                            </div>
                                            <Progress value={skill.progress} className="h-2" />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getLevelColor(skill.level)}`}>
                                                {skill.level}
                                            </div>
                                            <span className="text-xs text-muted-foreground">{skill.lastSession}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Expanded Skill Details */}
                            {selectedSkill && (
                                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                    {(() => {
                                        const selected = skills.find((s) => s.id === selectedSkill);
                                        return selected ? (
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <div>
                                                        <h3 className="font-semibold">{selected.name}</h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            Keep up the great work!
                                                        </p>
                                                    </div>
                                                    <Button className="bg-primary hover:bg-primary/90">
                                                        Continue Learning
                                                        <ArrowRight className="h-4 w-4 ml-2" />
                                                    </Button>
                                                </div>

                                                <div className="grid grid-cols-3 gap-4 text-sm">
                                                    <div>
                                                        <p className="text-muted-foreground">Progress</p>
                                                        <p className="font-semibold text-lg">{selected.progress}%</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-muted-foreground">Total Hours</p>
                                                        <p className="font-semibold text-lg">{selected.totalHours}h</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-muted-foreground">Level</p>
                                                        <p className="font-semibold text-lg">{selected.level}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null;
                                    })()}
                                </div>
                            )}
                        </Card>

                        {/* Weekly Activity */}
                        <Card className="p-6 shadow-sm">
                            <h2 className="text-xl font-semibold mb-6">Weekly Activity</h2>

                            <div className="bg-muted/20 p-6 rounded-lg">
                                <div className="flex items-end justify-between h-40 gap-2">
                                    {activityData.map((data, index) => {
                                        const maxHours = Math.max(...activityData.map((d) => d.hours));
                                        const heightPercent = (data.hours / maxHours) * 100;
                                        const isToday = index === 6; // Assuming today is Sunday

                                        return (
                                            <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                                                <div
                                                    className={`w-full rounded-t-lg transition ${isToday
                                                        ? "bg-primary hover:bg-primary/90"
                                                        : "bg-secondary hover:bg-secondary/90"
                                                        }`}
                                                    style={{ height: `${heightPercent}%` }}
                                                ></div>
                                                <span className="text-xs font-medium text-muted-foreground">
                                                    {data.day}
                                                </span>
                                                <span className="text-xs font-semibold">{data.hours}h</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-secondary/10 rounded-lg flex items-center gap-2">
                                <Flame className="h-5 w-5 text-orange-500" />
                                <p className="text-sm">
                                    <span className="font-semibold">6-day streak!</span> Keep learning daily to maintain
                                    your momentum.
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        {/* Achievements */}
                        <Card className="p-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Award className="h-5 w-5 text-amber-500" />
                                Achievements
                            </h2>

                            <div className="space-y-3">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.id}
                                        className={`p-3 rounded-lg border transition ${achievement.earned
                                            ? "bg-amber-50 border-amber-200"
                                            : "bg-muted/30 border-border"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl flex-shrink-0">{achievement.icon}</span>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm">{achievement.title}</p>
                                                <p className="text-xs text-muted-foreground">{achievement.description}</p>

                                                {achievement.progress !== undefined && !achievement.earned && (
                                                    <div className="mt-2">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="text-xs text-muted-foreground">Progress</span>
                                                            <span className="text-xs font-semibold">
                                                                {achievement.progress}/{achievement.id === 3 ? 30 : achievement.id === 4 ? 10 : 5}
                                                            </span>
                                                        </div>
                                                        <Progress
                                                            value={
                                                                (achievement.progress /
                                                                    (achievement.id === 3 ? 30 : achievement.id === 4 ? 10 : 5)) *
                                                                100
                                                            }
                                                            className="h-1"
                                                        />
                                                    </div>
                                                )}

                                                {achievement.earned && (
                                                    <div className="mt-1 text-xs font-semibold text-green-600">
                                                        ✓ Earned
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Quick Stats */}
                        <Card className="p-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium">This Week</span>
                                        <span className="text-lg font-bold text-secondary">20h</span>
                                    </div>
                                    <Progress value={80} className="h-2" />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium">This Month</span>
                                        <span className="text-lg font-bold text-primary">68h</span>
                                    </div>
                                    <Progress value={68} className="h-2" />
                                </div>

                                <div className="pt-2 border-t space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Avg. Daily</span>
                                        <span className="font-semibold">2.9h</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Current Streak</span>
                                        <span className="font-semibold">6 days</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Sessions Completed</span>
                                        <span className="font-semibold">23</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* CTA */}
                        <Button className="w-full bg-primary hover:bg-primary/90 h-11 text-base font-semibold">
                            <Target className="h-5 w-5 mr-2" />
                            Set Learning Goals
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LearningDashboard;
