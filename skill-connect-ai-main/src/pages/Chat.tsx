import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Search,
    Send,
    Paperclip,
    Mic,
    Smile,
    MoreVertical,
    Phone,
    Video,
    Plus,
    X,
    Download,
    Trash2,
    Calendar,
    Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Chat {
    id: number;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    unread: boolean;
    online: boolean;
    skill: string;
}

interface Message {
    id: number;
    sender: "user" | "mentor";
    content: string;
    timestamp: string;
    avatar: string;
}

interface SharedFile {
    id: number;
    name: string;
    size: string;
    type: string;
}

const Chat = () => {
    const [activeChat, setActiveChat] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [filter, setFilter] = useState<"all" | "mentors" | "students" | "unread">("all");
    const scrollRef = useRef<HTMLDivElement>(null);

    const chats: Chat[] = [
        {
            id: 1,
            name: "Michael Chen",
            avatar: "👨‍💻",
            lastMessage: "Great! Let's start with Python basics...",
            timestamp: "2 min",
            unread: true,
            online: true,
            skill: "Python Mentor",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            avatar: "👩‍🎨",
            lastMessage: "Thanks for the guitar lesson yesterday!",
            timestamp: "1 hour",
            unread: false,
            online: false,
            skill: "Guitar Student",
        },
        {
            id: 3,
            name: "Priya Sharma",
            avatar: "🧘‍♀️",
            lastMessage: "Can we reschedule for next week?",
            timestamp: "3 hours",
            unread: false,
            online: true,
            skill: "Yoga Mentor",
        },
        {
            id: 4,
            name: "James Wilson",
            avatar: "👨‍📚",
            lastMessage: "Perfect, see you tomorrow at 6 PM",
            timestamp: "Yesterday",
            unread: false,
            online: false,
            skill: "English Student",
        },
        {
            id: 5,
            name: "Emma Davis",
            avatar: "👩‍💼",
            lastMessage: "I'm interested in learning Spanish",
            timestamp: "2 days",
            unread: false,
            online: true,
            skill: "Spanish Student",
        },
    ];

    const messages: Message[] = [
        {
            id: 1,
            sender: "mentor",
            content: "Hi! Welcome to our Python learning journey 🐍",
            timestamp: "10:30 AM",
            avatar: "👨‍💻",
        },
        {
            id: 2,
            sender: "user",
            content: "Thanks! I'm excited to get started",
            timestamp: "10:31 AM",
            avatar: "👤",
        },
        {
            id: 3,
            sender: "mentor",
            content: "Let me share some resources for beginners",
            timestamp: "10:32 AM",
            avatar: "👨‍💻",
        },
        {
            id: 4,
            sender: "mentor",
            content: "📁 PythonBasics.pdf (2.3 MB)",
            timestamp: "10:33 AM",
            avatar: "👨‍💻",
        },
        {
            id: 5,
            sender: "user",
            content: "Great! When should we start our first session?",
            timestamp: "10:35 AM",
            avatar: "👤",
        },
        {
            id: 6,
            sender: "mentor",
            content: "Great! Let's start with Python basics...",
            timestamp: "10:36 AM",
            avatar: "👨‍💻",
        },
    ];

    const sharedFiles: SharedFile[] = [
        { id: 1, name: "PythonBasics.pdf", size: "2.3 MB", type: "PDF" },
        { id: 2, name: "LearningPath.docx", size: "1.1 MB", type: "DOCX" },
        { id: 3, name: "Resources.zip", size: "5.6 MB", type: "ZIP" },
    ];

    const currentChat = chats.find((c) => c.id === activeChat)!;

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            // Handle message sending
            setMessageInput("");
        }
    };

    const filteredChats = chats.filter((chat) => {
        const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
            filter === "all" ||
            (filter === "mentors" && chat.skill.includes("Mentor")) ||
            (filter === "students" && chat.skill.includes("Student")) ||
            (filter === "unread" && chat.unread);
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen flex flex-col bg-[#F7F8FA]">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">Messages</h1>
                    <p className="text-muted-foreground">Connect with mentors and students</p>
                </div>

                <div className="grid grid-cols-12 gap-4 h-[calc(100vh-300px)] rounded-lg overflow-hidden">
                    {/* Left Sidebar - Conversation List (20%) */}
                    <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow-sm border flex flex-col">
                        {/* Search */}
                        <div className="p-4 border-b">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search chats..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 px-4 pt-4 overflow-x-auto">
                            {["all", "mentors", "students", "unread"].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f as any)}
                                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition ${filter === f
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                                        }`}
                                >
                                    {f.charAt(0).toUpperCase() + f.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Chat List */}
                        <ScrollArea className="flex-1 px-2 py-2">
                            <div className="space-y-1">
                                {filteredChats.map((chat) => (
                                    <button
                                        key={chat.id}
                                        onClick={() => setActiveChat(chat.id)}
                                        className={`w-full p-3 rounded-lg text-left transition flex items-start gap-3 hover:bg-muted/50 ${activeChat === chat.id ? "bg-primary/10 border border-primary/20" : ""
                                            }`}
                                    >
                                        <div className="relative flex-shrink-0">
                                            <div className="text-2xl">{chat.avatar}</div>
                                            {chat.online && (
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <p className={`text-sm font-medium ${chat.unread ? "font-bold" : ""}`}>
                                                    {chat.name}
                                                </p>
                                                <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground truncate">
                                                {chat.skill}
                                            </p>
                                            <p className={`text-xs truncate ${chat.unread ? "font-semibold" : "text-muted-foreground"}`}>
                                                {chat.lastMessage}
                                            </p>
                                        </div>
                                        {chat.unread && (
                                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Center - Chat Window (60%) */}
                    <div className="col-span-12 md:col-span-6 bg-white rounded-lg shadow-sm border flex flex-col">
                        {/* Chat Header */}
                        <div className="p-4 border-b flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="text-3xl">{currentChat.avatar}</div>
                                    {currentChat.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{currentChat.name}</h3>
                                    <p className="text-xs text-muted-foreground">
                                        {currentChat.online ? "Online" : "Offline"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button size="icon" variant="ghost">
                                    <Phone className="h-5 w-5" />
                                </Button>
                                <Button size="icon" variant="ghost">
                                    <Video className="h-5 w-5" />
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoreVertical className="h-5 w-5" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Mute Chat</DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">Delete Chat</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        {/* Messages */}
                        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        {msg.sender === "mentor" && (
                                            <div className="text-2xl flex-shrink-0">{msg.avatar}</div>
                                        )}
                                        <div className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                                            <div
                                                className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "user"
                                                    ? "bg-primary text-primary-foreground rounded-br-none"
                                                    : "bg-muted rounded-bl-none"
                                                    }`}
                                            >
                                                <p className="text-sm">{msg.content}</p>
                                            </div>
                                            <span className="text-xs text-muted-foreground mt-1">{msg.timestamp}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        {/* Input Area */}
                        <div className="p-4 border-t space-y-3">
                            <div className="flex gap-2">
                                <Button size="icon" variant="ghost" className="text-muted-foreground">
                                    <Paperclip className="h-5 w-5" />
                                </Button>
                                <Input
                                    placeholder="Type a message..."
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                    className="flex-1"
                                />
                                <Button size="icon" variant="ghost" className="text-muted-foreground">
                                    <Mic className="h-5 w-5" />
                                </Button>
                                <Button size="icon" variant="ghost" className="text-muted-foreground">
                                    <Smile className="h-5 w-5" />
                                </Button>
                                <Button size="icon" onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
                                    <Send className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Quick Actions (20%) */}
                    <div className="col-span-12 md:col-span-3 space-y-4 overflow-y-auto">
                        {/* Mentor Card */}
                        <Card className="p-4 shadow-sm">
                            <div className="text-center mb-4">
                                <div className="text-5xl mb-2">{currentChat.avatar}</div>
                                <h3 className="font-semibold">{currentChat.name}</h3>
                                <div className="flex items-center justify-center gap-1 mt-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm">4.8 (156 reviews)</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Button className="w-full bg-secondary hover:bg-secondary/90 text-foreground" size="sm">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Book Session
                                </Button>
                                <Button variant="outline" className="w-full" size="sm">
                                    View Full Profile
                                </Button>
                            </div>
                        </Card>

                        {/* Shared Files */}
                        <Card className="p-4 shadow-sm">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Paperclip className="h-4 w-4" />
                                Shared Files ({sharedFiles.length})
                            </h4>
                            <div className="space-y-2">
                                {sharedFiles.map((file) => (
                                    <div key={file.id} className="p-2 bg-muted rounded-lg flex items-center justify-between">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-medium truncate">{file.name}</p>
                                            <p className="text-xs text-muted-foreground">{file.size}</p>
                                        </div>
                                        <Button size="icon" variant="ghost" className="h-8 w-8">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Quick Info */}
                        <Card className="p-4 shadow-sm">
                            <h4 className="font-semibold mb-3">Quick Info</h4>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-muted-foreground">Skill</p>
                                    <p className="font-medium">{currentChat.skill}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Status</p>
                                    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${currentChat.online ? "bg-green-100 border-green-200 text-green-800" : "bg-muted border-border text-muted-foreground"}`}>
                                        {currentChat.online ? "Online" : "Offline"}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Actions */}
                        <div className="space-y-2">
                            <Button variant="outline" className="w-full justify-start" size="sm">
                                <Plus className="h-4 w-4 mr-2" />
                                Pinned Messages
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-destructive" size="sm">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Clear Chat
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Chat;
