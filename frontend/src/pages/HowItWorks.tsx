import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Brain, Calendar, TrendingUp, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Skill Profile",
      description: "Add the skills you can teach and the ones you want to learn. Set your availability and location.",
      icon: Users,
      color: "bg-blue-100",
    },
    {
      number: 2,
      title: "AI Matchmaking",
      description: "Our AI matches you with the best partners based on skill compatibility, time slots, and proximity.",
      icon: Brain,
      color: "bg-green-100",
    },
    {
      number: 3,
      title: "Book Your First Session",
      description: "Choose a time that works for both of you. Meet online or in person.",
      icon: Calendar,
      color: "bg-purple-100",
    },
    {
      number: 4,
      title: "Learn & Grow",
      description: "Track your improvement and unlock badges as you complete sessions.",
      icon: TrendingUp,
      color: "bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-transparent py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">🤝</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How SkillShare Works
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn, teach, and grow with your community in just 4 simple steps.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white px-8 py-6 text-lg">
                Get Started Now
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative">
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-[#4A90E2] to-[#7ED321] opacity-30"></div>
                    )}

                    <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in">
                      <div className="flex gap-8">
                        {/* Icon Circle */}
                        <div className="flex-shrink-0">
                          <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center`}>
                            <Icon className="w-10 h-10 text-gray-700" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-sm font-bold text-[#4A90E2] bg-blue-50 px-3 py-1 rounded-full">
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why SkillShare?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Matching</h3>
                <p className="text-gray-600">
                  AI-powered algorithm finds the perfect skill-learning partner for you instantly.
                </p>
              </Card>

              <Card className="p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Community</h3>
                <p className="text-gray-600">
                  Connect with learners and mentors from 50+ countries in a safe environment.
                </p>
              </Card>

              <Card className="p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
                <p className="text-gray-600">
                  Earn badges, unlock achievements, and visualize your learning journey.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#4A90E2] to-[#7ED321]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Share Your Skills?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of learners and mentors transforming education together.
            </p>
            <Button className="bg-white text-[#4A90E2] hover:bg-gray-100 px-10 py-6 text-lg font-semibold flex items-center gap-2 mx-auto">
              Join SkillShare Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
