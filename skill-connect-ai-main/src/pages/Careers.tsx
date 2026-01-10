import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Briefcase, Users, Lightbulb, Heart, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const jobs = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      team: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build scalable features that impact millions. You'll work with modern tech stack including React, Node.js, and PostgreSQL.",
      responsibilities: [
        "Design and implement new platform features",
        "Optimize database queries and API performance",
        "Mentor junior engineers",
        "Collaborate with product and design teams",
      ],
    },
    {
      id: 2,
      title: "Product Designer",
      team: "Design",
      location: "Hybrid - San Francisco",
      type: "Full-time",
      description:
        "Shape the future of learning by designing intuitive, beautiful interfaces that users love.",
      responsibilities: [
        "Create user-centered designs for new features",
        "Conduct user research and usability testing",
        "Build design systems and components",
        "Collaborate with engineering and product teams",
      ],
    },
    {
      id: 3,
      title: "Community Manager",
      team: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Foster a thriving community by engaging with users, organizing events, and gathering feedback.",
      responsibilities: [
        "Manage social media and community channels",
        "Organize virtual and in-person events",
        "Gather and communicate user feedback",
        "Create engaging content and newsletters",
      ],
    },
    {
      id: 4,
      title: "Data Analyst",
      team: "Analytics",
      location: "Remote",
      type: "Full-time",
      description:
        "Use data to drive decisions that improve learning outcomes and platform engagement.",
      responsibilities: [
        "Analyze user behavior and engagement metrics",
        "Build dashboards and reports",
        "Identify trends and opportunities",
        "Support A/B testing and experiments",
      ],
    },
  ];

  const benefits = [
    { icon: Briefcase, title: "Remote-Friendly", description: "Work from anywhere" },
    { icon: Lightbulb, title: "Growth Opportunities", description: "Learn and develop" },
    { icon: Heart, title: "Meaningful Impact", description: "Change lives through learning" },
    { icon: Zap, title: "Work-Life Balance", description: "Flexible hours and time off" },
    { icon: Users, title: "Great Team", description: "Collaborate with talented people" },
    { icon: Lightbulb, title: "Continuous Learning", description: "L&D budget and courses" },
  ];

  const values = [
    {
      emoji: "🎯",
      title: "Work with Purpose",
      description: "Every day, your work helps someone learn a new skill and achieve their dreams.",
    },
    {
      emoji: "📚",
      title: "Learn Every Day",
      description: "We believe in continuous learning. Access courses, mentorship, and conferences.",
    },
    {
      emoji: "🌍",
      title: "Flexible Remote Environment",
      description: "Work from home, coffee shop, or co-working space. We trust you to do great work.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#4A90E2] to-[#7ED321] text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Help us make learning accessible for everyone. We're hiring talented people who are passionate about education and community.
            </p>
          </div>
        </section>

        {/* Culture Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why SkillShare?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="p-8 shadow-lg hover:shadow-xl transition">
                  <div className="text-5xl mb-4">{value.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>

            <div className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="p-8 shadow-md hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.team}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </Badge>
                        <Badge className="bg-[#7ED321] text-gray-900">{job.type}</Badge>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 whitespace-nowrap">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                          <DialogDescription className="text-base">
                            {job.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6 my-6">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{job.team}</Badge>
                            <Badge variant="outline">{job.location}</Badge>
                            <Badge className="bg-[#7ED321] text-gray-900">{job.type}</Badge>
                          </div>

                          <div>
                            <h4 className="font-bold text-lg mb-3">Responsibilities:</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex gap-3 text-gray-600">
                                  <span className="text-[#4A90E2]">•</span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button className="w-full bg-[#4A90E2] hover:bg-[#4A90E2]/90 py-6 text-lg">
                            Apply Now
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <p className="text-gray-600">{job.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits & Perks</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="p-6 text-center shadow-md hover:shadow-lg transition">
                    <Icon className="w-12 h-12 text-[#4A90E2] mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join a Team You'll Love
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is diverse, passionate, and committed to making learning accessible. We foster a culture of collaboration, growth, and innovation.
            </p>

            <Card className="p-12 bg-gradient-to-br from-blue-50 to-green-50 border-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see a role that fits?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented people. Send us your resume and tell us how you'd like to contribute!
              </p>
              <Button className="bg-[#4A90E2] hover:bg-[#4A90E2]/90">
                Send Your Resume
              </Button>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#4A90E2] to-[#7ED321]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Help us build the future of education.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
