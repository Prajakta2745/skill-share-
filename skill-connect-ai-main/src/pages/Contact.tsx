import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "How does SkillShare match me with the right mentor?",
      answer:
        "Our AI algorithm analyzes your skill interests, availability, and location to find the best matches. We consider compatibility scores, mentor ratings, and your learning goals to ensure successful pairings.",
    },
    {
      id: 2,
      question: "Is it free to join SkillShare?",
      answer:
        "Yes! Joining SkillShare is completely free. You can create a profile, add your skills, and start browsing mentors at no cost. Session pricing is determined by individual mentors.",
    },
    {
      id: 3,
      question: "Can I teach and learn at the same time?",
      answer:
        "Absolutely! Many of our users do both. You can add multiple skills you want to teach and learn simultaneously. Build your profile with both teaching and learning interests.",
    },
    {
      id: 4,
      question: "What if I can't attend a scheduled session?",
      answer:
        "You can reschedule or cancel a session up to 24 hours before the scheduled time with no penalty. Just notify your partner through the messaging system.",
    },
    {
      id: 5,
      question: "How are payments handled?",
      answer:
        "Payments are processed securely through our platform. Mentors set their own rates, and payments are held until sessions are completed. We take a small platform fee.",
    },
    {
      id: 6,
      question: "Is my personal information safe?",
      answer:
        "Security is our top priority. All data is encrypted, and we follow industry-standard security practices. We never share your information with third parties without consent.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#4A90E2] to-[#7ED321] text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl opacity-90">
              Have a question? We'd love to hear from you. Send us a message!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-semibold">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="font-semibold">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more..."
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#4A90E2] hover:bg-[#4A90E2]/90 py-6 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-8 shadow-lg">
                  <div className="flex gap-4 mb-4">
                    <Mail className="w-8 h-8 text-[#4A90E2] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:hello@skillshare.com"
                        className="text-[#4A90E2] hover:underline"
                      >
                        hello@skillshare.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 shadow-lg">
                  <div className="flex gap-4 mb-4">
                    <Phone className="w-8 h-8 text-[#4A90E2] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+1-800-SKILLSHARE"
                        className="text-[#4A90E2] hover:underline"
                      >
                        +1 (800) 754-5574
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Mon–Fri, 9am–6pm EST
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 shadow-lg">
                  <div className="flex gap-4 mb-4">
                    <MapPin className="w-8 h-8 text-[#4A90E2] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Learning Lane
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Social Links */}
                <Card className="p-8 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
                  <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {["Twitter", "LinkedIn", "Facebook"].map((social) => (
                      <button
                        key={social}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4A90E2] text-white hover:bg-[#4A90E2]/90 transition"
                      >
                        {social.charAt(0)}
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={faq.id}
                  open={openFaq === index}
                  onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <Card className="border-none shadow-md hover:shadow-lg transition">
                    <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition rounded-lg">
                      <h3 className="font-semibold text-gray-900 text-left text-lg">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#4A90E2] transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6 border-t text-gray-600">
                      {faq.answer}
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#4A90E2] to-[#7ED321]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Check out our help center or contact our support team.
            </p>
            <Button className="bg-white text-[#4A90E2] hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
              Visit Help Center
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
