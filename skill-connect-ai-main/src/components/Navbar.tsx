import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, MessageSquare, Calendar, BarChart3, Settings, Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Skills", path: "/explore" },
    { label: "Community", path: "/community" },
    { label: "How It Works", path: "/how-it-works" },
  ];

  const companyLinks = [
    { label: "About", path: "/about" },
    { label: "Company", path: "/company" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const userMenuItems = [
    { label: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { label: "Messages", path: "/chat", icon: MessageSquare },
    { label: "Sessions", path: "/booking", icon: Calendar },
    { label: "Learning", path: "/learning-dashboard", icon: GraduationCap },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SkillShare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            {/* Company Links Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary cursor-pointer">
                Company
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {companyLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className="cursor-pointer"
                  >
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="rounded-full hover:bg-secondary/10 transition-colors"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </Button>

            {/* Quick Actions */}
            <Button size="icon" variant="ghost" onClick={() => navigate("/chat")} title="Messages">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => navigate("/booking")} title="Book Session">
              <Calendar className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                      PS
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-semibold">Prajakta Sharma</p>
                  <p className="text-xs text-muted-foreground">prajakta@example.com</p>
                </div>
                <DropdownMenuSeparator />
                {userMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      className="cursor-pointer"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/auth")} className="cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary py-2"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-4 mt-2">
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase">Company</p>
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:bg-muted rounded-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="border-t pt-4 mt-2">
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase">Theme</p>
                  <button
                    onClick={toggleTheme}
                    className="w-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:bg-muted rounded-lg flex items-center gap-2"
                  >
                    {theme === "light" ? (
                      <>
                        <Moon className="h-4 w-4" />
                        Dark Mode
                      </>
                    ) : (
                      <>
                        <Sun className="h-4 w-4" />
                        Light Mode
                      </>
                    )}
                  </button>
                </div>

                <div className="border-t pt-4 mt-2">
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase">Account</p>
                  {userMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className="w-full text-left px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:bg-muted rounded-lg flex items-center gap-2"
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="ghost" onClick={() => navigate("/auth")} className="w-full">
                    Login
                  </Button>
                  <Button variant="default" onClick={() => navigate("/auth?tab=signup")} className="w-full">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
