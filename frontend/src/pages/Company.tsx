import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, Eye, Heart, Linkedin } from "lucide-react";

const Company = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve to provide the best learning experience.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "We believe in the power of peer-to-peer learning and connection.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We operate with integrity and openness in everything we do.",
    },
  ];

  const team = [
    { name: "Sarah Chen", role: "Co-Founder & CEO", image: "👩‍💼" },
    { name: "Michael Rodriguez", role: "Co-Founder & CTO", image: "👨‍💻" },
    { name: "Emily Walsh", role: "Head of Product", image: "👩‍🔬" },
    { name: "Raj Patel", role: "Head of Community", image: "👨‍🎓" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#4A90E2] to-[#7ED321] text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Believe in Community-Powered Learning
            </h1>
            <p className="text-xl opacity-90 mb-8">
              SkillShare is transforming how people learn and grow together.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 text-center shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To make quality education accessible to everyone by connecting skilled mentors with eager learners worldwide.
                </p>
              </Card>

              <Card className="p-8 text-center shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  A world where anyone can learn any skill from anyone, regardless of geography, wealth, or background.
                </p>
              </Card>

              <Card className="p-8 text-center shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, community, transparency, and a commitment to lifelong learning.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Story</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">📖</div>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  SkillShare was founded in 2023 by Sarah Chen and Michael Rodriguez, who shared a vision of democratizing education. After witnessing talented individuals unable to afford formal training, they created a platform where skills could be freely exchanged.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, SkillShare connects over 20,000 learners with 8,000+ mentors across 50+ countries, proving that community-powered learning is not just possible—it's transformative.
                </p>
              </div>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-[#4A90E2] font-bold">2023</span>
                    <span className="text-gray-600">Platform launched with beta users</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#4A90E2] font-bold">2024</span>
                    <span className="text-gray-600">Reached 10,000 active users globally</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#4A90E2] font-bold">2025</span>
                    <span className="text-gray-600">Public launch and Series A funding</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="p-6 text-center shadow-lg hover:shadow-xl transition">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                  <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4A90E2] text-white hover:bg-[#4A90E2]/90 transition">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="p-8 shadow-md hover:shadow-lg transition">
                    <Icon className="w-12 h-12 text-[#4A90E2] mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#4A90E2] to-[#7ED321]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Join the SkillShare Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of a movement that's changing how the world learns.
            </p>
            <Button className="bg-white text-[#4A90E2] hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Company;
