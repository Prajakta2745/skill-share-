import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar } from "lucide-react";

const Community = () => {
  const groups = [
    {
      name: "Pune Photography Club",
      members: 245,
      location: "Pune",
      image: "📸",
      category: "Photography",
    },
    {
      name: "Beginners Coding Group",
      members: 380,
      location: "Mumbai",
      image: "💻",
      category: "Programming",
    },
    {
      name: "Weekend Dance Meetup",
      members: 156,
      location: "Delhi",
      image: "💃",
      category: "Dance",
    },
  ];

  const events = [
    {
      title: "Web Development Workshop",
      date: "May 15, 2024",
      time: "10:00 AM",
      location: "Mumbai",
      attendees: 45,
    },
    {
      title: "Guitar Jam Session",
      date: "May 18, 2024",
      time: "6:00 PM",
      location: "Pune",
      attendees: 25,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className="text-muted-foreground">
            Join groups and attend events in your area
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Local Groups */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Local Groups</h2>
            <div className="space-y-4">
              {groups.map((group, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{group.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{group.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {group.members} members
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {group.location}
                        </span>
                      </div>
                      <Badge variant="secondary">{group.category}</Badge>
                    </div>
                    <Button>Join</Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {event.attendees} attending
                    </div>
                  </div>
                  <Button className="w-full">Register</Button>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
