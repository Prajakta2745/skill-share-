import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Star,
  Calendar,
  MessageSquare,
  Bookmark,
  Award,
  Clock,
} from "lucide-react";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const profile = {
    name: "Sarah Johnson",
    avatar: "👩‍🎨",
    location: "Mumbai, India",
    rating: 4.9,
    reviewCount: 120,
    availability: "Mon-Fri, 6-9 PM",
    bio: "Passionate musician with 10+ years of teaching experience. I believe in making learning fun and accessible for everyone. Let's make music together!",
    teachingStyle: "Interactive, patient, and goal-oriented. I adapt my teaching methods to each student's learning style and pace.",
    qualifications: "Grade 8 in Guitar Performance, Music Therapy Certified",
    skillsTeaching: [
      { name: "Guitar", level: "Expert", years: 10 },
      { name: "Piano", level: "Intermediate", years: 5 },
      { name: "Music Theory", level: "Advanced", years: 8 },
    ],
    skillsLearning: [
      { name: "Python", level: "Beginner" },
      { name: "Digital Marketing", level: "Intermediate" },
    ],
    packages: [
      { duration: "30 min", price: "₹200", sessions: "Single" },
      { duration: "1 hour", price: "₹350", sessions: "Single" },
      { duration: "10 hours", price: "₹3,000", sessions: "Package Deal" },
    ],
    userReviews: [
      {
        name: "Priya M.",
        avatar: "👩",
        rating: 5,
        date: "2 weeks ago",
        comment: "Amazing teacher! Very patient and explains concepts clearly.",
      },
      {
        name: "Rahul K.",
        avatar: "👨",
        rating: 5,
        date: "1 month ago",
        comment: "Best guitar lessons I've ever had. Highly recommend!",
      },
      {
        name: "Ananya S.",
        avatar: "👧",
        rating: 4,
        date: "2 months ago",
        comment: "Great teaching style. Helped me improve significantly.",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-8xl">{profile.avatar}</div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {profile.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {profile.availability}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(profile.rating)
                              ? "fill-secondary text-secondary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{profile.rating}</span>
                    <span className="text-muted-foreground">
                      ({profile.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button size="lg">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat
                  </Button>
                  <Button size="lg" variant="secondary">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Session
                  </Button>
                  <Button size="lg" variant="outline">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About Me</h3>
                  <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Teaching Style</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile.teachingStyle}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Qualifications
                  </h3>
                  <p className="text-muted-foreground">{profile.qualifications}</p>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Skills I Teach</h3>
                  <div className="space-y-4">
                    {profile.skillsTeaching.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{skill.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {skill.years} years experience
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={
                            skill.level === "Expert"
                              ? "bg-accent/10 text-accent"
                              : "bg-primary/10 text-primary"
                          }
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Skills I Want to Learn (for exchange)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skillsLearning.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {skill.name} - {skill.level}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {profile.userReviews.map((review, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{review.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-secondary text-secondary"
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Packages */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Session Packages</h3>
              <div className="space-y-3">
                {profile.packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="p-4 border-2 rounded-lg hover:border-primary transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold">{pkg.duration}</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.sessions}</p>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium">
                    💡 Skill exchange available instead of payment
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-semibold">~1 hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Students</span>
                  <span className="font-semibold">150+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sessions Completed</span>
                  <span className="font-semibold">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-semibold">2023</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
