import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Globe, Star, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Learners", value: "20,000+" },
    { icon: Award, label: "Expert Mentors", value: "8,000+" },
    { icon: Globe, label: "Countries", value: "50+" },
    { icon: Star, label: "Platform Rating", value: "4.9/5" },
  ];

  const timeline = [
    { year: "2023", title: "Idea Born", description: "Sarah & Michael start SkillShare" },
    { year: "2024", title: "Prototype Built", description: "Beta launch with 1,000 users" },
    { year: "2025", title: "Public Beta Released", description: "Growth to 20,000+ learners" },
    { year: "2026", title: "Global Expansion", description: "Community grows worldwide" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About SkillShare
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make quality education accessible to everyone by connecting skilled mentors with eager learners worldwide.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="p-8 text-center shadow-lg hover:shadow-xl transition">
                    <Icon className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
                    <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4A90E2] to-[#7ED321] transform -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="flex-1">
                      <Card className="p-6 shadow-md hover:shadow-lg transition">
                        <p className="text-sm font-bold text-[#4A90E2] mb-2">{item.year}</p>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </Card>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-2xl">🎓</span>
                      <p className="text-gray-600">12,000+ skills successfully learned</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">⭐</span>
                      <p className="text-gray-600">95% of users recommend SkillShare</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">💼</span>
                      <p className="text-gray-600">3,000+ career transitions facilitated</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">🌍</span>
                      <p className="text-gray-600">Lessons in 40+ languages</p>
                    </li>
                  </ul>
                </Card>
              </div>

              <div>
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">By The Numbers</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">User Satisfaction</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#4A90E2] h-3 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Mentor Quality Rating</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-[#7ED321] h-3 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Session Completion Rate</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Mentions */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">In The Press</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {["TechCrunch", "Forbes", "The Guardian"].map((publication) => (
                <Card key={publication} className="p-8 text-center shadow-md hover:shadow-lg transition">
                  <div className="text-4xl font-bold text-gray-400 mb-4">{publication.charAt(0)}</div>
                  <p className="text-gray-900 font-semibold mb-2">{publication}</p>
                  <p className="text-sm text-gray-600">"Revolutionizing peer-to-peer learning"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#4A90E2] to-[#7ED321]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Be Part of the Learning Revolution
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands transforming how people learn and grow together.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
