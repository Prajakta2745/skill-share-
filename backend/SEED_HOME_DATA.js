/**
 * MongoDB Seed Script - Home Page Data
 * 
 * Usage in MongoDB:
 * 1. Open MongoDB Shell or MongoDB Compass
 * 2. Connect to your skill-connect database
 * 3. Copy and paste the commands below
 * 
 * Or use mongoimport tool if you save this as individual JSON files
 */

// Clear existing data (optional)
db.herocontent.deleteMany({});
db.skills.deleteMany({});
db.testimonials.deleteMany({});
db.whycooseitems.deleteMany({});

// ==================== HERO CONTENT ====================
db.herocontent.insertOne({
  title: "Welcome to Skill Connect AI",
  subtitle: "Master in-demand skills with AI-powered personalized learning paths",
  primaryCtaText: "Start Learning Free",
  secondaryCtaText: "Watch Demo",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
});

// ==================== SKILLS ====================
db.skills.insertMany([
  {
    name: "TypeScript",
    icon: "📘",
    popularityScore: 95,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Python",
    icon: "🐍",
    popularityScore: 92,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "React",
    icon: "⚛️",
    popularityScore: 90,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Node.js",
    icon: "🟢",
    popularityScore: 88,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "MongoDB",
    icon: "🍃",
    popularityScore: 85,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Docker",
    icon: "🐳",
    popularityScore: 82,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Next.js",
    icon: "⚡",
    popularityScore: 80,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "GraphQL",
    icon: "📊",
    popularityScore: 75,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Vue.js",
    icon: "💚",
    popularityScore: 72,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Kubernetes",
    icon: "☸️",
    popularityScore: 70,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

// ==================== TESTIMONIALS ====================
db.testimonials.insertMany([
  {
    userName: "Sarah Johnson",
    role: "Software Engineer at Google",
    message:
      "Skill Connect AI transformed my career. The personalized learning paths are incredibly effective!",
    rating: 5,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "Mike Chen",
    role: "Full Stack Developer",
    message:
      "Great platform with comprehensive content. Highly recommend it to anyone wanting to upskill!",
    rating: 5,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "Emma Davis",
    role: "Data Scientist",
    message:
      "The AI recommendations are spot-on. Learned new concepts faster than ever before.",
    rating: 4,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "James Wilson",
    role: "Product Manager at Meta",
    message: "Excellent learning platform. Very structured and easy to follow.",
    rating: 5,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "Lisa Anderson",
    role: "DevOps Engineer",
    message:
      "Loved the course material and community support. Worth every penny!",
    rating: 5,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "Alex Martinez",
    role: "Junior Developer",
    message:
      "Best investment I made for my career. The mentorship and guidance is amazing.",
    rating: 4,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

// ==================== WHY CHOOSE ITEMS ====================
db.whycooseitems.insertMany([
  {
    title: "AI-Powered Learning",
    description:
      "Personalized learning paths adapted to your pace and style using cutting-edge AI algorithms",
    icon: "🤖",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Industry-Relevant Skills",
    description:
      "Learn skills demanded by top tech companies in 2024 and beyond",
    icon: "🎯",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Flexible Schedule",
    description:
      "Learn at your own pace with courses available 24/7, fitting your lifestyle",
    icon: "⏰",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals working at leading tech companies",
    icon: "👨‍🏫",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Community Support",
    description:
      "Join a thriving community of learners, share knowledge, and grow together",
    icon: "👥",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Certification Ready",
    description:
      "Earn recognized certifications that boost your resume and career prospects",
    icon: "🏆",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

// ==================== CONFIRMATION ====================
console.log("✅ HeroContent inserted:", db.herocontent.countDocuments());
console.log("✅ Skills inserted:", db.skills.countDocuments());
console.log("✅ Testimonials inserted:", db.testimonials.countDocuments());
console.log("✅ WhyChooseItems inserted:", db.whycooseitems.countDocuments());
