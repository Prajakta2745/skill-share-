import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Star,
  Music,
  Code,
  Dumbbell,
  ChefHat,
  Sparkles,
  Users,
  TrendingUp,
  MessageSquare,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Loader,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const API_BASE_URL = "http://localhost:3000";

interface HeroContent {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

interface Skill {
  _id: string;
  name: string;
  icon: string;
  popularityScore: number;
  isFeatured: boolean;
}

interface Testimonial {
  _id: string;
  userName: string;
  userRole: string;
  content: string;
  rating: number;
}

interface WhyChooseItem {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState<HeroContent | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [whyChoose, setWhyChoose] = useState<WhyChooseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all data from backend
        const [heroRes, skillsRes, testimonialRes, whyChooseRes] = await Promise.all([
          fetch(`${API_BASE_URL}/home/hero`),
          fetch(`${API_BASE_URL}/home/skills?featured=true`),
          fetch(`${API_BASE_URL}/home/testimonials`),
          fetch(`${API_BASE_URL}/home/why-choose`),
        ]);

        if (heroRes.ok) {
          const hero = await heroRes.json();
          setHeroData(hero);
        }

        if (skillsRes.ok) {
          const skillsData = await skillsRes.json();
          setSkills(Array.isArray(skillsData) ? skillsData : []);
        }

        if (testimonialRes.ok) {
          const testimonialData = await testimonialRes.json();
          setTestimonials(Array.isArray(testimonialData) ? testimonialData : []);
        }

        if (whyChooseRes.ok) {
          const whyChooseData = await whyChooseRes.json();
          setWhyChoose(Array.isArray(whyChooseData) ? whyChooseData : []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fallback data if API fails
  const fallbackWhyChoose = [
    {
      _id: "1",
      icon: "👨‍🏫",
      title: "Expert Mentors",
      description: "Learn from industry leaders with 10+ years of experience",
    },
    {
      _id: "2",
      icon: "🚀",
      title: "Live Projects",
      description: "Build real-world projects and add them to your portfolio",
    },
    {
      _id: "3",
      icon: "⏰",
      title: "Flexible Learning",
      description: "Learn at your own pace, anytime, anywhere",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading your skills...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-20 md:py-32">
            <div className="container mx-auto">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                {/* Left Content */}
                <div className="space-y-6 animate-fade-in">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    {heroData?.title || "Learn, Teach & Share Skills Together."}
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                    {heroData?.subtitle || "A community-driven platform to find mentors, learn new skills, and grow together with people who share your passion."}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={() => navigate("/auth?tab=signup")}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg"
                    >
                      Get Started Free
                    </Button>
                    <Button
                      onClick={() => navigate("/explore")}
                      variant="outline"
                      className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all"
                    >
                      Explore Skills
                    </Button>
                  </div>

                  <div className="flex items-center gap-8 pt-6">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                          JD
                        </div>
                        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold">
                          SK
                        </div>
                        <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">
                          PM
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground font-inter">
                        Join <span className="font-semibold text-foreground">20K+</span> learners
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Illustration */}
                <div className="relative hidden md:block">
                  <div className="relative h-96 flex items-center justify-center">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 blur-3xl"></div>
                    </div>

                    {/* Skill Cards Animation */}
                    <div className="relative z-10 space-y-6 w-full">
                      <div className="flex justify-center gap-4 animate-float">
                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <Music className="w-8 h-8 text-primary" />
                        </div>
                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <Code className="w-8 h-8 text-secondary" />
                        </div>
                      </div>
                      <div className="flex justify-center gap-4 animate-float-delayed">
                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <Dumbbell className="w-8 h-8 text-primary" />
                        </div>
                        <div className="bg-card rounded-2xl p-4 shadow-lg">
                          <ChefHat className="w-8 h-8 text-secondary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Search Bar Section */}
          <section className="bg-background px-4 py-16 md:py-24 -mt-8 relative z-10">
            <div className="container mx-auto max-w-2xl">
              <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
                <h2 className="text-center text-2xl font-bold text-foreground mb-6 font-poppins">
                  Find Your Next Skill
                </h2>

                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder="Search for skills… Guitar, Coding, Cooking, Yoga…"
                    className="w-full px-6 py-4 border-2 border-border rounded-lg focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground text-lg"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-lg transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2 block w-full text-center">
                    Popular Skills
                  </span>
                  {["Coding", "Music", "Fitness", "Cooking", "Design"].map((skill) => (
                    <button
                      key={skill}
                      onClick={() => navigate("/explore")}
                      className="px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground rounded-full text-sm font-semibold transition-all"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Popular Skills Section */}
          <section className="bg-background px-4 py-20 md:py-28">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
                  Popular Skills
                </h2>
                <p className="text-lg text-muted-foreground font-inter">
                  Explore skills in demand with thousands of mentors ready to help
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills && skills.length > 0 ? (
                  skills.map((skill) => (
                    <div
                      key={skill._id}
                      onClick={() => navigate("/explore")}
                      className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:scale-105 border border-border cursor-pointer text-center group"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="text-4xl">{skill.icon}</div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {skill.name}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-2">
                        {skill.popularityScore}% popular
                      </p>

                      <button className="text-sm font-semibold text-primary hover:text-secondary transition-colors">
                        Learn →
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 md:col-span-4 text-center text-muted-foreground">
                    No skills available
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Why Choose SkillShare Section */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-20 md:py-28">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Us?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to learn and grow
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {(whyChoose.length > 0 ? whyChoose : fallbackWhyChoose).map((item) => (
                  <Card
                    key={item._id || item.title}
                    className="p-8 bg-card border border-border shadow-md hover:shadow-xl transition-all rounded-2xl hover:scale-105"
                  >
                    <div className="mb-6">
                      <div className="text-4xl">{item.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-background px-4 py-20 md:py-28">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Loved by Learners
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real stories from real people transforming their skills
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials && testimonials.length > 0 ? (
                  testimonials.map((testimonial) => {
                    const initials = testimonial.userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
                    return (
                      <Card
                        key={testimonial._id}
                        className="p-8 bg-card border border-border shadow-md hover:shadow-xl transition-all rounded-2xl backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {initials}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {testimonial.userName}
                            </p>
                            <p className="text-sm text-muted-foreground">{testimonial.userRole}</p>
                          </div>
                        </div>

                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        <p className="text-muted-foreground italic leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </Card>
                    );
                  })
                ) : (
                  <div className="col-span-3 text-center text-muted-foreground">
                    No testimonials yet
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary to-primary/80 px-4 py-16 md:py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-poppins">
                Start Your Skill Journey Today
              </h2>

              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-inter">
                Join thousands of learners and mentors building amazing skills together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/auth?tab=signup")}
                  className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-8 py-6 text-lg rounded-lg transition-all"
                >
                  Join Now
                </Button>
                <Button
                  onClick={() => navigate("/community")}
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg rounded-lg transition-all"
                >
                  View Community
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-card border-t border-border text-foreground px-4 py-12 md:py-16">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* Brand */}
                <div>
                  <h3 className="text-lg font-bold mb-4 font-poppins">SkillShare</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-inter">
                    Connecting learners with mentors. Growing skills, growing together.
                  </p>
                </div>

                {/* Company Links */}
                <div>
                  <h4 className="font-semibold mb-4 font-poppins">Company</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <button
                        onClick={() => navigate("/about")}
                        className="hover:text-foreground transition-colors"
                      >
                        About
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/company")}
                        className="hover:text-foreground transition-colors"
                      >
                        Company
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/careers")}
                        className="hover:text-foreground transition-colors"
                      >
                        Careers
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/contact")}
                        className="hover:text-foreground transition-colors"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Support Links */}
                <div>
                  <h4 className="font-semibold mb-4 font-poppins">Support</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <button
                        onClick={() => navigate("/how-it-works")}
                        className="hover:text-foreground transition-colors"
                      >
                        How It Works
                      </button>
                    </li>
                    <li>
                      <a href="#" className="hover:text-foreground transition-colors">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-foreground transition-colors">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-foreground transition-colors">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4 font-poppins">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  © 2024 SkillShare. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-muted-foreground mt-4 md:mt-0">
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </main>
  );
};

export default Index;
