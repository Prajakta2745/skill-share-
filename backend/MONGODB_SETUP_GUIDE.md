# MongoDB Setup Guide for Skill Connect AI

## Overview
This guide provides step-by-step instructions to set up MongoDB and seed your Skill Connect AI home page backend with sample data.

---

## 📋 Table of Contents
1. [Option 1: Local MongoDB Installation](#option-1-local-mongodb-installation)
2. [Option 2: MongoDB Atlas (Cloud)](#option-2-mongodb-atlas-cloud)
3. [Option 3: Docker MongoDB](#option-3-docker-mongodb)
4. [Seeding the Database](#seeding-the-database)
5. [Verify Setup](#verify-setup)
6. [Troubleshooting](#troubleshooting)

---

## Option 1: Local MongoDB Installation

### Step 1.1: Download MongoDB
**Windows:**
1. Go to https://www.mongodb.com/try/download/community
2. Select **Windows** as your operating system
3. Choose **MSI** as the package type
4. Click **Download**
5. Run the installer (e.g., `mongodb-windows-x86_64-7.0.0-signed.msi`)

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Step 1.2: Install MongoDB
**Windows:**
1. Run the MSI installer you downloaded
2. Follow the installation wizard
3. Choose **Custom** installation (recommended)
4. Keep default paths or choose your preference
5. Install MongoDB Compass (optional but recommended)
6. Select "Run MongoDB as a Windows Service" for auto-start
7. Click **Finish**

**macOS/Linux:**
The installation from the commands above handles everything.

### Step 1.3: Verify Installation

**Windows (PowerShell):**
```powershell
mongod --version
```

**macOS/Linux:**
```bash
mongod --version
```

Expected output: Something like `db version v7.0.0`

### Step 1.4: Start MongoDB Service

**Windows:**
```powershell
# MongoDB should auto-start if installed as service
# To manually start:
net start MongoDB

# To check if running:
Get-Service MongoDB
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
sudo systemctl status mongod
```

### Step 1.5: Verify MongoDB is Running

```bash
# Should connect without errors
mongosh
```

If it connects, you'll see:
```
Current Mongosh Log ID: ...
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true
```

Type `exit` to close.

---

## Option 2: MongoDB Atlas (Cloud)

### Recommended for production and testing without local setup

### Step 2.1: Create Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click **Sign Up**
3. Enter email, password, first name, last name
4. Accept terms and click **Sign Up**
5. Verify your email

### Step 2.2: Create a Cluster
1. Click **Create** on the Atlas dashboard
2. Choose **Free** tier (free for personal use)
3. Click **Create Cluster**
4. Select **AWS** as provider
5. Choose **Virginia (us-east-1)** region
6. Keep cluster name as default or customize
7. Click **Create Cluster** (takes 2-5 minutes)

### Step 2.3: Create Database User
1. Go to **Database Access** in left sidebar
2. Click **Add New Database User**
3. Choose **Username and Password** authentication
4. Enter username: `skillconnect` (or your choice)
5. Generate secure password or create one (save it!)
6. Set database user privileges to **Atlas admin**
7. Click **Add User**

### Step 2.4: Configure Network Access
1. Go to **Network Access** in left sidebar
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (for development)
   - Or enter your IP address for security
4. Click **Confirm**

### Step 2.5: Get Connection String
1. Go back to **Clusters**
2. Click **Connect** on your cluster
3. Choose **Drivers** option
4. Copy the connection string:
   ```
   mongodb+srv://skillconnect:PASSWORD@cluster.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```
5. Replace `PASSWORD` with your actual password

### Step 2.6: Update Environment Variable
1. Open `.env` file in backend folder
2. Add or update:
   ```
   MONGO_URI=mongodb+srv://skillconnect:YOUR_PASSWORD@cluster.mongodb.net/skill-connect?retryWrites=true&w=majority
   ```

---

## Option 3: Docker MongoDB

### Recommended for isolated, consistent environment

### Step 3.1: Install Docker
1. Download Docker Desktop from https://www.docker.com/products/docker-desktop
2. Install and run Docker Desktop
3. Verify installation:
   ```bash
   docker --version
   docker run hello-world
   ```

### Step 3.2: Run MongoDB Container
```bash
# Create a MongoDB container
docker run -d \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  -v mongodb_data:/data/db \
  --name skill-connect-mongo \
  mongo:latest
```

### Step 3.3: Verify Container Running
```bash
docker ps

# Should show your skill-connect-mongo container
```

### Step 3.4: Update Environment Variable
```
MONGO_URI=mongodb://admin:password123@localhost:27017/skill-connect?authSource=admin
```

### Step 3.5: Stop/Start Container
```bash
# Stop
docker stop skill-connect-mongo

# Start
docker start skill-connect-mongo

# Remove (if needed)
docker rm skill-connect-mongo
```

---

## Seeding the Database

### Step 4.1: Connect to MongoDB

**Using MongoDB Shell (mongosh):**

**Local MongoDB:**
```bash
mongosh
```

**MongoDB Atlas:**
```bash
mongosh "mongodb+srv://skillconnect:PASSWORD@cluster.mongodb.net/skill-connect"
```

**Docker MongoDB:**
```bash
docker exec -it skill-connect-mongo mongosh -u admin -p password123
```

### Step 4.2: Select Database
```javascript
use skill-connect
```

Output: `switched to db skill-connect`

### Step 4.3: Verify You're in Correct Database
```javascript
db
```

Output: `skill-connect`

### Step 4.4: Seed the Data

Copy and paste the entire contents of `SEED_HOME_DATA.js` directly into the MongoDB shell:

```javascript
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
    message: "Skill Connect AI transformed my career. The personalized learning paths are incredibly effective!",
    rating: 5,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "Mike Chen",
    role: "Full Stack Developer",
    message: "Great platform with comprehensive content. Highly recommend it to anyone wanting to upskill!",
    rating: 5,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "Emma Davis",
    role: "Data Scientist",
    message: "The AI recommendations are spot-on. Learned new concepts faster than ever before.",
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
    message: "Loved the course material and community support. Worth every penny!",
    rating: 5,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "Alex Martinez",
    role: "Junior Developer",
    message: "Best investment I made for my career. The mentorship and guidance is amazing.",
    rating: 4,
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

// ==================== WHY CHOOSE ITEMS ====================
db.whychooseitems.insertMany([
  {
    title: "AI-Powered Learning",
    description: "Personalized learning paths adapted to your pace and style using cutting-edge AI algorithms",
    icon: "🤖",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Industry-Relevant Skills",
    description: "Learn skills demanded by top tech companies in 2024 and beyond",
    icon: "🎯",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Flexible Schedule",
    description: "Learn at your own pace with courses available 24/7, fitting your lifestyle",
    icon: "⏰",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Expert Instructors",
    description: "Learn from experienced professionals working at leading tech companies",
    icon: "👨‍🏫",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Community Support",
    description: "Join a thriving community of learners, share knowledge, and grow together",
    icon: "👥",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Certification Ready",
    description: "Earn recognized certifications that boost your resume and career prospects",
    icon: "🏆",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

// ==================== CONFIRMATION ====================
console.log("✅ HeroContent inserted:", db.herocontent.countDocuments());
console.log("✅ Skills inserted:", db.skills.countDocuments());
console.log("✅ Testimonials inserted:", db.testimonials.countDocuments());
console.log("✅ WhyChooseItems inserted:", db.whychooseitems.countDocuments());
```

### Step 4.5: Verify Insertion
You should see output like:
```
✅ HeroContent inserted: 1
✅ Skills inserted: 10
✅ Testimonials inserted: 6
✅ WhyChooseItems inserted: 6
```

### Step 4.6: Exit MongoDB Shell
```javascript
exit
```

---

## Verify Setup

### Step 5.1: Set Environment Variable
Update your `.env` file in the backend folder:

**For Local MongoDB:**
```
MONGO_URI=mongodb://localhost:27017/skill-connect
```

**For MongoDB Atlas:**
```
MONGO_URI=mongodb+srv://skillconnect:PASSWORD@cluster.mongodb.net/skill-connect?retryWrites=true&w=majority
```

**For Docker MongoDB:**
```
MONGO_URI=mongodb://admin:password123@localhost:27017/skill-connect?authSource=admin
```

### Step 5.2: Start Backend Server
```bash
cd backend
npm install
npm run start:dev
```

Expected output:
```
[Nest] 1234  - 01/07/2026, 12:00:00 PM   LOG [NestFactory] Starting Nest application...
[Nest] 1234  - 01/07/2026, 12:00:00 PM   LOG [InstanceLoader] MongooseModule dependencies initialized...
[Nest] 1234  - 01/07/2026, 12:00:00 PM   LOG [RoutesResolver] HomeController {...}:
[Nest] 1234  - 01/07/2026, 12:00:00 PM   LOG [Nest] Listening on port 3000 🚀
```

### Step 5.3: Test API Endpoints

**Test Hero Content:**
```bash
curl http://localhost:3000/home/hero
```

Expected response:
```json
{
  "title": "Welcome to Skill Connect AI",
  "subtitle": "Master in-demand skills with AI-powered personalized learning paths",
  "primaryCtaText": "Start Learning Free",
  "secondaryCtaText": "Watch Demo",
  "isActive": true
}
```

**Test All Skills:**
```bash
curl http://localhost:3000/home/skills
```

Expected response: Array with 10 skill objects

**Test Featured Skills:**
```bash
curl http://localhost:3000/home/skills?featured=true
```

Expected response: Array with 4 featured skills

**Test Testimonials:**
```bash
curl http://localhost:3000/home/testimonials
```

Expected response: Array with 6 testimonial objects

**Test High-Rated Testimonials:**
```bash
curl http://localhost:3000/home/testimonials?minRating=5
```

Expected response: Array with 5-star testimonials

**Test Why Choose:**
```bash
curl http://localhost:3000/home/why-choose
```

Expected response: Array with 6 items

---

## Using MongoDB Compass (GUI)

### Visual Database Management

1. **Download MongoDB Compass**
   - Go to https://www.mongodb.com/products/tools/compass
   - Install for your OS

2. **Connect to Database**
   - **Local:** `mongodb://localhost:27017`
   - **Atlas:** Use your connection string from Atlas dashboard
   - **Docker:** `mongodb://admin:password123@localhost:27017/skill-connect?authSource=admin`

3. **Browse Collections**
   - Left sidebar shows your `skill-connect` database
   - Click each collection to view documents
   - Edit, add, or delete data visually

4. **View Sample Data**
   - Click `herocontent` → see 1 document
   - Click `skills` → see 10 documents
   - Click `testimonials` → see 6 documents
   - Click `whychooseitems` → see 6 documents

---

## Troubleshooting

### Issue: "Cannot connect to MongoDB"
**Solution:**
```bash
# Check if MongoDB is running
mongosh

# Or start MongoDB service:
# Windows: net start MongoDB
# macOS: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

### Issue: "MONGO_URI not set"
**Solution:**
1. Create `.env` file in backend folder
2. Add: `MONGO_URI=mongodb://localhost:27017/skill-connect`
3. Restart the server

### Issue: "Command not found: mongosh"
**Solution:**
```bash
# Install MongoDB Shell
npm install -g mongosh

# Or download from: https://www.mongodb.com/try/download/shell
```

### Issue: "Database already exists"
**Solution - Clear and reseed:**
```javascript
// In MongoDB shell
use skill-connect
db.dropDatabase()

// Then run SEED_HOME_DATA.js again
```

### Issue: Authentication failed (Atlas)
**Solution:**
- Check username and password in connection string
- Verify user exists in Database Access
- Ensure IP is whitelisted in Network Access
- Check for special characters in password (URL encode if needed)

### Issue: Connection timeout
**Solution:**
- Verify MongoDB service is running
- Check port 27017 is not blocked by firewall
- For Atlas, verify Network Access is configured
- Check internet connection

---

## Quick Comparison

| Method | Setup Time | Cost | Best For |
|--------|-----------|------|----------|
| **Local MongoDB** | 15 min | Free | Development |
| **MongoDB Atlas** | 10 min | Free tier | Testing & Production |
| **Docker** | 5 min | Free | Isolated environment |

---

## Environment Variable Reference

Create `.env` file with:

```bash
# Local MongoDB
MONGO_URI=mongodb://localhost:27017/skill-connect

# OR MongoDB Atlas
MONGO_URI=mongodb+srv://skillconnect:PASSWORD@cluster.mongodb.net/skill-connect?retryWrites=true&w=majority

# OR Docker
MONGO_URI=mongodb://admin:password123@localhost:27017/skill-connect?authSource=admin

# Server
PORT=3000
NODE_ENV=development
JWT_SECRET=your-secret-key
```

---

## Next Steps

1. ✅ Choose MongoDB setup method (Local/Atlas/Docker)
2. ✅ Install and configure MongoDB
3. ✅ Create `.env` file with MONGO_URI
4. ✅ Run seeding script (SEED_HOME_DATA.js)
5. ✅ Start backend: `npm run start:dev`
6. ✅ Test endpoints with cURL
7. ✅ Integrate frontend

---

**MongoDB Setup Complete! Your backend is ready to serve data.** 🎉

For questions, check the API documentation in `HOME_BACKEND_DOCUMENTATION.md`
