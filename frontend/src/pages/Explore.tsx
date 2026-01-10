import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Filter,
  Code,
  Music,
  Palette,
  Languages,
  Dumbbell,
  ChefHat,
  BookOpen,
  Camera,
  MapPin,
  Star,
} from "lucide-react";

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { icon: Code, name: "Programming", color: "text-primary" },
    { icon: Music, name: "Music", color: "text-secondary" },
    { icon: Palette, name: "Art & Crafts", color: "text-accent" },
    { icon: Languages, name: "Languages", color: "text-primary" },
    { icon: Dumbbell, name: "Fitness", color: "text-accent" },
    { icon: ChefHat, name: "Cooking", color: "text-secondary" },
    { icon: BookOpen, name: "Academics", color: "text-primary" },
    { icon: Camera, name: "Photography", color: "text-accent" },
  ];

  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "👩‍🎨",
      teaches: "Guitar",
      level: "Expert",
      rating: 4.9,
      reviews: 120,
      location: "Mumbai",
      distance: "2.3 km",
      price: "₹350/hr",
      exchange: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "👨‍💻",
      teaches: "Python Development",
      level: "Expert",
      rating: 4.8,
      reviews: 95,
      location: "Pune",
      distance: "1.8 km",
      price: "₹500/hr",
      exchange: true,
    },
    {
      id: 3,
      name: "Priya Sharma",
      avatar: "🧘‍♀️",
      teaches: "Yoga & Meditation",
      level: "Advanced",
      rating: 5.0,
      reviews: 150,
      location: "Delhi",
      distance: "3.1 km",
      price: "₹300/hr",
      exchange: true,
    },
    {
      id: 4,
      name: "Rahul Mehta",
      avatar: "🎨",
      teaches: "Digital Painting",
      level: "Intermediate",
      rating: 4.7,
      reviews: 80,
      location: "Bangalore",
      distance: "4.5 km",
      price: "₹400/hr",
      exchange: false,
    },
    {
      id: 5,
      name: "Ananya Patel",
      avatar: "🍳",
      teaches: "Indian Cooking",
      level: "Expert",
      rating: 4.9,
      reviews: 110,
      location: "Mumbai",
      distance: "2.8 km",
      price: "₹250/hr",
      exchange: true,
    },
    {
      id: 6,
      name: "David Kumar",
      avatar: "📸",
      teaches: "Photography",
      level: "Advanced",
      rating: 4.8,
      reviews: 75,
      location: "Pune",
      distance: "3.5 km",
      price: "₹450/hr",
      exchange: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Skills</h1>
          <p className="text-muted-foreground">
            Find the perfect mentor or learning partner for your skill journey
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="p-6 mb-8">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search skills..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select>
              <SelectTrigger>
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Skill Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="weekend">Weekend</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Skill Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-4 text-center hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 border-2 hover:border-primary"
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${category.color}`} />
                  <p className="text-sm font-medium">{category.name}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Recommended Mentors */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Recommended Mentors</h2>
            <Select defaultValue="match">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Best Match</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="price">Price: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <Card
                key={mentor.id}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-primary"
                onClick={() => navigate(`/profile/${mentor.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">{mentor.avatar}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {mentor.location} • {mentor.distance}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Teaches</p>
                      <p className="font-semibold text-primary">{mentor.teaches}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{mentor.level}</Badge>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="font-semibold">{mentor.rating}</span>
                        <span className="text-muted-foreground">({mentor.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div>
                        <p className="text-lg font-semibold">{mentor.price}</p>
                        {mentor.exchange && (
                          <p className="text-xs text-accent">Skill exchange available</p>
                        )}
                      </div>
                      <Button size="sm">View Profile</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
