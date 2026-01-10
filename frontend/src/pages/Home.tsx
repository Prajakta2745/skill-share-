import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { FadeIn, SlideUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/AnimationWrapper";
import {
  Star,
  Music,
  Code,
  Dumbbell,
  ChefHat,
  Sparkles,
  Users,
  TrendingUp,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const popularSkills = [
    { name: "Guitar", icon: Music, count: "2.4K mentors" },
    { name: "Coding", icon: Code, count: "5.8K mentors" },
    { name: "Fitness", icon: Dumbbell, count: "1.9K mentors" },
    { name: "Cooking", icon: ChefHat, count: "1.2K mentors" },
  ];

  const whyChoose = [
    {
      icon: Sparkles,
      title: "AI Skill Matching",
      description:
        "Our intelligent algorithm matches you with the perfect mentor based on your goals and learning style.",
    },
    {
      icon: Users,
      title: "Local & Online Learning",
      description:
        "Choose between in-person sessions or online classes. Learn at your own pace, wherever you are.",
    },
    {
      icon: TrendingUp,
      title: "Learn by Teaching",
      description:
        "Share your expertise while learning. Every skill you teach strengthens your own knowledge.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      skill: "Web Development",
      rating: 5,
      quote: "Found an amazing mentor in just 2 days. Changed my career path!",
      initials: "SC",
    },
    {
      name: "Marcus Johnson",
      skill: "Guitar",
      rating: 5,
      quote: "Best platform for learning. The community is so supportive and welcoming.",
      initials: "MJ",
    },
    {
      name: "Priya Sharma",
      skill: "Digital Marketing",
      rating: 5,
      quote: "Not only learned new skills but made lifelong friends. Incredible experience!",
      initials: "PS",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F8FA] via-[#FFFFFF] to-[#EAF4FF] px-4 py-24 md:py-40 lg:py-48">
        <div className="container mx-auto">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            {/* Left Content */}
            <SlideUp duration={0.6}>
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#333] leading-tight font-poppins tracking-tight">
                  Learn, Teach &
                  <span className="block bg-gradient-to-r from-[#4A90E2] to-[#7ED321] bg-clip-text text-transparent">
                    Share Skills
                  </span>
                  Together.
                </h1>

                <p className="text-lg md:text-xl text-[#666] leading-relaxed max-w-lg font-inter">
                  A community-driven platform to find mentors, learn new skills, and grow together with people who share your passion.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    onClick={() => navigate("/auth?tab=signup")}
                    className="bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all hover:shadow-xl hover:-translate-y-1 shadow-lg"
                  >
                    Get Started Free
                  </Button>
                  <Button
                    onClick={() => navigate("/explore")}
                    variant="outline"
                    className="border-2 border-[#7ED321] text-[#7ED321] hover:bg-[#7ED321] hover:text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all hover:shadow-lg"
                  >
                    Explore Skills
                  </Button>
                </div>

              <FadeIn delay={0.3} duration={0.5}>
                <div className="flex items-center gap-8 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-[#4A90E2] flex items-center justify-center text-white text-xs font-bold">
                        JD
                      </div>
                      <div className="h-8 w-8 rounded-full bg-[#7ED321] flex items-center justify-center text-white text-xs font-bold">
                        SK
                      </div>
                      <div className="h-8 w-8 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white text-xs font-bold">
                        PM
                      </div>
                    </div>
                    <span className="text-sm text-[#666] font-inter">
                      Join <span className="font-semibold text-[#333]">20K+</span> learners
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
            </SlideUp>

            {/* Right Illustration */}
            <div className="relative hidden md:block">
              <div className="relative h-96 flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#7ED321] opacity-10 blur-3xl"></div>
                </div>

                {/* Skill Cards Animation */}
                <div className="relative z-10 space-y-6 w-full">
                  <div className="flex justify-center gap-4 animate-float">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <Music className="w-8 h-8 text-[#4A90E2]" />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <Code className="w-8 h-8 text-[#7ED321]" />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 animate-float-delayed">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <Dumbbell className="w-8 h-8 text-[#4A90E2]" />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <ChefHat className="w-8 h-8 text-[#7ED321]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-white px-4 py-20 md:py-28 -mt-10 relative z-10">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-[#333] mb-8 font-poppins">
              Find Your Next Skill
            </h2>

            <div className="relative mb-8">
              <Input
                type="text"
                placeholder="Search for skills… Guitar, Coding, Cooking, Yoga…"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-[#4A90E2] focus:outline-none text-[#333] placeholder-[#999] text-lg hover:border-gray-300 transition-colors"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#4A90E2] hover:bg-[#357ABD] text-white p-2 rounded-lg transition-all hover:shadow-lg active:scale-95">
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

            <div className="flex flex-wrap gap-3 justify-center">
              <span className="text-xs uppercase tracking-wider text-[#999] font-semibold mb-2 block w-full text-center">
                Popular Skills
              </span>
              {["Coding", "Music", "Fitness", "Cooking", "Design"].map((skill) => (
                <button
                  key={skill}
                  onClick={() => navigate("/explore")}
                  className="px-4 py-2 bg-[#F7F8FA] hover:bg-[#4A90E2] hover:text-white text-[#333] rounded-full text-sm font-semibold transition-all hover:shadow-md active:scale-95"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Skills Section */}
      <section className="bg-white px-4 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333] mb-6 font-poppins">
              Popular Skills
            </h2>
            <p className="text-lg text-[#666] font-inter max-w-2xl mx-auto">
              Explore skills in demand with thousands of mentors ready to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <StaggerContainer staggerDelay={0.1}>
              {popularSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <StaggerItem key={skill.name}>
                    <div
                      onClick={() => navigate("/explore")}
                      className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-200 cursor-pointer text-center group"
                    >
                      <div className="flex justify-center mb-6">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#333] mb-3 font-poppins">
                        {skill.name}
                      </h3>

                      <p className="text-sm text-[#999] mb-6 font-inter">{skill.count}</p>

                      <button className="text-sm font-semibold text-[#4A90E2] hover:text-[#7ED321] transition-colors inline-flex items-center gap-2">
                        Find Mentors 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Why Choose SkillShare Section */}
      <section className="bg-gradient-to-br from-[#F7F8FA] to-[#EAF4FF] px-4 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333] mb-6 font-poppins">
              Why Choose SkillShare?
            </h2>
            <p className="text-lg text-[#666] font-inter max-w-2xl mx-auto">
              Everything you need to learn and grow with a community that supports you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <StaggerContainer staggerDelay={0.15}>
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index}>
                    <Card
                      className="p-10 bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all rounded-2xl hover:scale-105 hover:-translate-y-1 duration-300"
                    >
                      <div className="mb-8">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-[#333] mb-4 font-poppins">
                        {item.title}
                      </h3>

                      <p className="text-[#666] leading-relaxed font-inter text-base">
                        {item.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-4 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333] mb-6 font-poppins">
              Loved by Learners
            </h2>
            <p className="text-lg text-[#666] font-inter max-w-2xl mx-auto">
              Real stories from real people transforming their skills and building meaningful connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <StaggerContainer staggerDelay={0.1}>
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <Card
                    className="p-10 bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all rounded-2xl hover:-translate-y-1 duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#7ED321] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-[#333] font-poppins text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[#999]">{testimonial.skill}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-[#666] italic leading-relaxed font-inter">
                      "{testimonial.quote}"
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#4A90E2] via-[#357ABD] to-[#2E68A6] px-4 py-20 md:py-28 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        
        <ScaleIn duration={0.6}>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Start Your Skill Journey Today
            </h2>

            <p className="text-lg text-blue-100 mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
              Join thousands of learners and mentors building amazing skills together. Find your perfect mentor or share your expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/auth?tab=signup")}
                className="bg-white hover:bg-gray-100 text-[#4A90E2] font-semibold px-8 py-3 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Join Now
              </Button>
              <Button
                onClick={() => navigate("/community")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#4A90E2] font-semibold px-8 py-3 text-lg rounded-lg transition-all"
              >
                View Community
              </Button>
            </div>
          </div>
        </ScaleIn>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold mb-4 font-poppins">SkillShare</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-inter">
                Connecting learners with mentors. Growing skills, growing together.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 font-poppins">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/company")}
                    className="hover:text-white transition-colors"
                  >
                    Company
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/careers")}
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4 font-poppins">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => navigate("/how-it-works")}
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
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
                  className="h-10 w-10 rounded-full bg-gray-800 hover:bg-[#4A90E2] flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-800 hover:bg-[#4A90E2] flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-gray-800 hover:bg-[#4A90E2] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 SkillShare. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
