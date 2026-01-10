// MongoDB Seed Script - Add Sample Data
// Run with: mongosh -u admin -p password123 --authenticationDatabase admin < seed.js

use skill - connect

// 1️⃣ ADD HERO CONTENT
db.herocontent.insertOne({
  title: "Welcome to Skill Connect AI",
  subtitle: "Learn Skills, Connect with Experts, Build Your Future",
  ctaPrimary: "Get Started",
  ctaSecondary: "Learn More",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
})

// 2️⃣ ADD SKILLS (10 items)
db.skill.insertMany([
  { name: "JavaScript", icon: "⚡", popularityScore: 95, isFeatured: true, createdAt: new Date() },
  { name: "Python", icon: "🐍", popularityScore: 92, isFeatured: true, createdAt: new Date() },
  { name: "React", icon: "⚛️", popularityScore: 89, isFeatured: true, createdAt: new Date() },
  { name: "TypeScript", icon: "📘", popularityScore: 85, isFeatured: true, createdAt: new Date() },
  { name: "MongoDB", icon: "🍃", popularityScore: 82, isFeatured: false, createdAt: new Date() },
  { name: "Docker", icon: "🐳", popularityScore: 78, isFeatured: false, createdAt: new Date() },
  { name: "Node.js", icon: "🟩", popularityScore: 88, isFeatured: false, createdAt: new Date() },
  { name: "AWS", icon: "☁️", popularityScore: 75, isFeatured: false, createdAt: new Date() },
  { name: "Machine Learning", icon: "🤖", popularityScore: 72, isFeatured: false, createdAt: new Date() },
  { name: "Web Design", icon: "🎨", popularityScore: 68, isFeatured: false, createdAt: new Date() }
])

// 3️⃣ ADD TESTIMONIALS (6 items)
db.testimonial.insertMany([
  { userName: "Sarah Johnson", userRole: "Product Manager", content: "Skill Connect AI helped me master React in just 3 months!", rating: 5, isApproved: true, createdAt: new Date() },
  { userName: "Mike Chen", userRole: "Software Engineer", content: "Amazing platform with expert mentors. Highly recommended!", rating: 5, isApproved: true, createdAt: new Date() },
  { userName: "Emily Rodriguez", userRole: "Data Analyst", content: "The Python course was exactly what I needed. Great content!", rating: 4, isApproved: true, createdAt: new Date() },
  { userName: "James Wilson", userRole: "Startup Founder", content: "Learned full-stack development. Best investment ever!", rating: 5, isApproved: true, createdAt: new Date() },
  { userName: "Lisa Park", userRole: "Designer", content: "Web Design course opened so many opportunities for me.", rating: 4, isApproved: true, createdAt: new Date() },
  { userName: "David Kumar", userRole: "DevOps Engineer", content: "Docker and AWS courses were professional and thorough.", rating: 5, isApproved: true, createdAt: new Date() }
])

// 4️⃣ ADD WHY CHOOSE ITEMS (6 items)
db.whychooseitem.insertMany([
  { title: "Expert Mentors", description: "Learn from industry leaders with 10+ years of experience", icon: "👨‍🏫", createdAt: new Date() },
  { title: "Live Projects", description: "Build real-world projects and add them to your portfolio", icon: "🚀", createdAt: new Date() },
  { title: "Flexible Learning", description: "Learn at your own pace, anytime, anywhere", icon: "⏰", createdAt: new Date() },
  { title: "Job Ready", description: "Get hired faster with our job placement assistance", icon: "💼", createdAt: new Date() },
  { title: "Community", description: "Join 50,000+ learners in our supportive community", icon: "👥", createdAt: new Date() },
  { title: "Lifetime Access", description: "Unlimited access to course materials forever", icon: "♾️", createdAt: new Date() }
])

print("✅ Database seeded successfully!")
