import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/AnimationWrapper";
import {
  MessageSquare,
  Calendar,
  TrendingUp,
  User,
  Sparkles,
  MapPin,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const suggestedMatches = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "👩‍🎨",
      teaches: "Guitar",
      wants: "Python",
      matchScore: 92,
      distance: "2.3 km",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "👨‍💻",
      teaches: "Web Development",
      wants: "Spanish",
      matchScore: 87,
      distance: "1.8 km",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Priya Sharma",
      avatar: "🧘‍♀️",
      teaches: "Yoga",
      wants: "Cooking",
      matchScore: 85,
      distance: "3.1 km",
      rating: 5.0,
    },
  ];

  const userSkills = [
    { name: "Python", level: "Intermediate", progress: 65 },
    { name: "Guitar", level: "Beginner", progress: 30 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50/50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-10 md:py-12">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 font-poppins">Welcome back, Prajakta 👋</h1>
          <p className="text-lg text-gray-600 font-inter">
            Ready to continue your learning journey?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Next Session */}
            <FadeIn duration={0.5}>
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                    <Calendar className="h-6 w-6 text-primary" />
                    Next Session
                  </h2>
                </div>
                <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-2">Python Basics</h3>
                      <p className="text-primary-foreground/90 mb-4 text-base">
                        with Michael Chen
                      </p>
                      <div className="flex items-center gap-6 text-sm font-medium">
                        <span>📅 Tomorrow, 6:00 PM</span>
                        <span>⏱️ 1 hour</span>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm" className="font-semibold">
                      Join
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* AI Suggested Matches */}
            <FadeIn duration={0.5} delay={0.2}>
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-gray-200">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                    <Sparkles className="h-6 w-6 text-accent" />
                    AI Suggested Matches
                  </h2>
                  <Button variant="ghost" size="sm" onClick={() => navigate("/explore")} className="font-medium">
                    View All
                  </Button>
                </div>
                <div className="space-y-5">
                  <StaggerContainer staggerDelay={0.1}>
                    {suggestedMatches.map((match) => (
                      <StaggerItem key={match.id}>
                        <Card
                          className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 border-gray-200 hover:border-primary hover:bg-blue-50/30 duration-300"
                          onClick={() => navigate(`/profile/${match.id}`)}
                        >
                          <div className="flex items-center gap-5">
                            <div className="text-5xl">{match.avatar}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-bold text-lg text-gray-900">{match.name}</h3>
                                <Badge variant="secondary" className="text-xs font-semibold">
                                  {match.matchScore}% Match
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                Teaches: <span className="text-accent font-bold">{match.teaches}</span> •
                                Wants: <span className="text-primary font-bold">{match.wants}</span>
                              </p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="h-4 w-4" />
                                  {match.distance}
                                </span>
                                <span className="font-semibold">⭐ {match.rating}</span>
                              </div>
                            </div>
                            <Button size="sm" className="font-semibold">Connect</Button>
                          </div>
                        </Card>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <FadeIn duration={0.5} delay={0.3}>
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-gray-200">
                <h3 className="font-bold text-lg mb-6 text-gray-900">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start font-semibold text-base py-3" onClick={() => navigate("/explore")}>
                    <User className="mr-3 h-5 w-5" />
                    Find Mentors
                  </Button>
                  <Button variant="outline" className="w-full justify-start font-semibold text-base py-3">
                    <MessageSquare className="mr-3 h-5 w-5" />
                    Messages
                  </Button>
                  <Button variant="outline" className="w-full justify-start font-semibold text-base py-3">
                    <Calendar className="mr-3 h-5 w-5" />
                    My Schedule
                  </Button>
                </div>
              </Card>
            </FadeIn>

            {/* Your Skills */}
            <FadeIn duration={0.5} delay={0.4}>
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-gray-200">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    Your Skills
                  </h3>
                  <Button variant="ghost" size="sm" className="font-semibold text-xs">
                    Add More
                  </Button>
                </div>
                <div className="space-y-6">
                  {userSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-gray-900">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {skill.level}
                        </Badge>
                      </div>
                      <Progress value={skill.progress} className="h-3 rounded-full" />
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>

            {/* Recent Activity */}
            <FadeIn duration={0.5} delay={0.5}>
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-gray-200">
                <h3 className="font-bold text-lg mb-6 text-gray-900">Recent Activity</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-gray-600 font-medium">
                      Completed lesson with Michael Chen
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <p className="text-gray-600 font-medium">
                      New match: Sarah Johnson
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    <p className="text-gray-600 font-medium">
                      Updated your profile
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
