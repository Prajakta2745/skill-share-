import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, MapPin, Star, Clock, DollarSign } from "lucide-react";
import { toast } from "sonner";

const Booking = () => {
    const navigate = useNavigate();
    const [currentMonth, setCurrentMonth] = useState(new Date(2024, 10, 18));
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedDuration, setSelectedDuration] = useState<"30" | "60">("60");
    const [sessionType, setSessionType] = useState<"online" | "offline" | "both">("online");
    const [selectedOption, setSelectedOption] = useState<"session" | "exchange">("session");

    // Mentor data
    const mentor = {
        id: 1,
        name: "Michael Chen",
        skill: "Python Programming",
        rating: 4.8,
        reviews: 156,
        bio: "Experienced Python developer with 10+ years in tech industry. Specialized in web development and data science.",
        avatar: "👨‍💻",
        price: 25,
        location: "San Francisco, CA",
        lat: 37.7749,
        lng: -122.4194,
        availability: {
            available: [18, 19, 20, 21, 22, 25, 26, 27, 28, 29],
            unavailable: [23, 24, 30],
        },
    };

    const timeSlots = [
        { label: "9:00 AM", value: "09:00", category: "morning" },
        { label: "10:00 AM", value: "10:00", category: "morning" },
        { label: "11:00 AM", value: "11:00", category: "morning" },
        { label: "2:00 PM", value: "14:00", category: "afternoon" },
        { label: "3:00 PM", value: "15:00", category: "afternoon" },
        { label: "4:00 PM", value: "16:00", category: "afternoon" },
        { label: "6:00 PM", value: "18:00", category: "evening" },
        { label: "7:00 PM", value: "19:00", category: "evening" },
        { label: "8:00 PM", value: "20:00", category: "evening" },
    ];

    // Calendar generation
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
        }

        return days;
    };

    const isDateAvailable = (date: Date | null) => {
        if (!date) return false;
        const day = date.getDate();
        return mentor.availability.available.includes(day);
    };

    const isDateUnavailable = (date: Date | null) => {
        if (!date) return false;
        const day = date.getDate();
        return mentor.availability.unavailable.includes(day);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleConfirmBooking = () => {
        if (!selectedDate || !selectedTime) {
            toast.error("Please select both date and time");
            return;
        }

        const bookingDetails = {
            mentorName: mentor.name,
            skill: mentor.skill,
            date: selectedDate.toLocaleDateString(),
            time: selectedTime,
            duration: selectedDuration,
            type: sessionType,
            option: selectedOption,
            price: selectedOption === "session" ? mentor.price : "Exchange",
        };

        toast.success("Booking confirmed! Redirecting to dashboard...");
        setTimeout(() => {
            navigate("/dashboard", { state: { bookingConfirmed: true, booking: bookingDetails } });
        }, 1500);
    };

    const calendarDays = generateCalendarDays();
    const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" });

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="mb-8">
                    <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")} className="mb-4">
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Back to Dashboard
                    </Button>
                    <h1 className="text-3xl font-bold mb-2">Book a Session</h1>
                    <p className="text-muted-foreground">Schedule your next learning session with a mentor</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6">
                    {/* Left Panel - Mentor Details (40%) */}
                    <div className="lg:col-span-2">
                        <Card className="p-6 sticky top-24 shadow-sm">
                            {/* Mentor Profile */}
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-5xl">{mentor.avatar}</div>
                                    <div>
                                        <h2 className="text-xl font-semibold">{mentor.name}</h2>
                                        <p className="text-sm text-muted-foreground">{mentor.skill}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{mentor.rating}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">({mentor.reviews} reviews)</span>
                                </div>

                                {/* Bio */}
                                <p className="text-sm text-foreground/80 mb-4">{mentor.bio}</p>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                    <MapPin className="h-4 w-4" />
                                    <span>{mentor.location}</span>
                                </div>
                            </div>

                            <div className="border-t pt-4 mb-4">
                                <h3 className="font-semibold mb-3">Session Options</h3>

                                {/* Duration Selection */}
                                <div className="space-y-2 mb-4">
                                    <Label className="text-sm font-medium">Duration</Label>
                                    <div className="flex gap-2">
                                        <Button
                                            variant={selectedDuration === "30" ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setSelectedDuration("30")}
                                            className="flex-1"
                                        >
                                            30 min
                                        </Button>
                                        <Button
                                            variant={selectedDuration === "60" ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setSelectedDuration("60")}
                                            className="flex-1"
                                        >
                                            60 min
                                        </Button>
                                    </div>
                                </div>

                                {/* Pricing Options */}
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Booking Type</Label>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 p-2 rounded-lg border cursor-pointer hover:bg-muted/50 transition" onClick={() => setSelectedOption("session")}>
                                            <input
                                                type="radio"
                                                checked={selectedOption === "session"}
                                                onChange={() => setSelectedOption("session")}
                                                className="w-4 h-4"
                                            />
                                            <div className="flex-1">
                                                <div className="font-medium text-sm">Standard Session</div>
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <DollarSign className="h-3 w-3" />
                                                    ${mentor.price}/{selectedDuration} min
                                                </div>
                                            </div>
                                        </label>
                                        <label className="flex items-center gap-3 p-2 rounded-lg border cursor-pointer hover:bg-muted/50 transition" onClick={() => setSelectedOption("exchange")}>
                                            <input
                                                type="radio"
                                                checked={selectedOption === "exchange"}
                                                onChange={() => setSelectedOption("exchange")}
                                                className="w-4 h-4"
                                            />
                                            <div className="flex-1">
                                                <div className="font-medium text-sm">Skill Exchange</div>
                                                <div className="text-sm text-muted-foreground">Free exchange</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="bg-secondary/10 rounded-lg p-3">
                                <p className="text-xs text-muted-foreground mb-2">Booking Summary:</p>
                                <div className="text-sm space-y-1">
                                    <div className="flex justify-between">
                                        <span>Duration:</span>
                                        <span className="font-semibold">{selectedDuration} min</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Price:</span>
                                        <span className="font-semibold">
                                            {selectedOption === "session" ? `$${mentor.price}` : "Free"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Panel - Booking Form (60%) */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Calendar */}
                        <Card className="p-6 shadow-sm">
                            <h3 className="font-semibold mb-4">Select Date</h3>

                            {/* Month Navigation */}
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-medium">{monthName}</h4>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="outline" onClick={handlePrevMonth}>
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="outline" onClick={handleNextMonth}>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2 mb-4">
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <div key={day} className="text-center text-xs font-semibold text-muted-foreground h-8 flex items-center justify-center">
                                        {day}
                                    </div>
                                ))}

                                {calendarDays.map((day, index) => {
                                    const isAvailable = isDateAvailable(day);
                                    const isUnavailable = isDateUnavailable(day);
                                    const isSelected = selectedDate && day && selectedDate.getDate() === day.getDate();

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => isAvailable && setSelectedDate(day)}
                                            disabled={!isAvailable}
                                            className={`h-10 rounded-lg flex items-center justify-center text-sm transition ${!day
                                                    ? "bg-transparent"
                                                    : isSelected
                                                        ? "bg-primary text-primary-foreground font-semibold"
                                                        : isUnavailable
                                                            ? "bg-muted text-muted-foreground cursor-not-allowed"
                                                            : isAvailable
                                                                ? "bg-secondary/20 text-foreground hover:bg-secondary/40 cursor-pointer"
                                                                : "bg-muted/50 text-muted-foreground cursor-not-allowed"
                                                }`}
                                        >
                                            {day?.getDate()}
                                        </button>
                                    );
                                })}
                            </div>

                            <p className="text-xs text-muted-foreground">
                                <span className="inline-block w-3 h-3 bg-secondary/20 rounded mr-2"></span>
                                Available dates
                            </p>
                        </Card>

                        {/* Time Slots */}
                        <Card className="p-6 shadow-sm">
                            <h3 className="font-semibold mb-4">Select Time</h3>

                            {selectedDate ? (
                                <div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Selected: <span className="font-semibold text-foreground">{selectedDate.toLocaleDateString()}</span>
                                    </p>

                                    {["morning", "afternoon", "evening"].map((category) => {
                                        const slots = timeSlots.filter((s) => s.category === category);
                                        const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

                                        return (
                                            <div key={category} className="mb-5">
                                                <p className="text-sm font-medium text-muted-foreground mb-3">{categoryLabel}</p>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {slots.map((slot) => (
                                                        <button
                                                            key={slot.value}
                                                            onClick={() => setSelectedTime(slot.value)}
                                                            className={`p-3 rounded-lg border-2 transition font-medium text-sm ${selectedTime === slot.value
                                                                    ? "bg-primary border-primary text-primary-foreground"
                                                                    : "border-border hover:border-primary/50"
                                                                }`}
                                                        >
                                                            {slot.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-sm">Please select a date first</p>
                            )}
                        </Card>

                        {/* Session Type */}
                        <Card className="p-6 shadow-sm">
                            <h3 className="font-semibold mb-4">Session Type</h3>

                            <RadioGroup value={sessionType} onValueChange={(value) => setSessionType(value as any)}>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition">
                                        <RadioGroupItem value="online" id="online" />
                                        <Label htmlFor="online" className="cursor-pointer flex-1 font-medium">
                                            Online Session
                                            <p className="text-sm text-muted-foreground font-normal">Via video call</p>
                                        </Label>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition">
                                        <RadioGroupItem value="offline" id="offline" />
                                        <Label htmlFor="offline" className="cursor-pointer flex-1 font-medium">
                                            In-Person Session
                                            <p className="text-sm text-muted-foreground font-normal">{mentor.location}</p>
                                        </Label>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition">
                                        <RadioGroupItem value="both" id="both" />
                                        <Label htmlFor="both" className="cursor-pointer flex-1 font-medium">
                                            Flexible
                                            <p className="text-sm text-muted-foreground font-normal">Confirm with mentor</p>
                                        </Label>
                                    </div>
                                </div>
                            </RadioGroup>
                        </Card>

                        {/* Confirm Button */}
                        <Button
                            onClick={handleConfirmBooking}
                            className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90"
                            disabled={!selectedDate || !selectedTime}
                        >
                            <Clock className="h-5 w-5 mr-2" />
                            Confirm Booking
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Booking;
