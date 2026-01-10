# 🚀 QUICK START - Skill Connect AI Backend

## ✅ Server Status

**Your NestJS server is now RUNNING! ✅**

```
✅ Development Server: http://localhost:3000
✅ Watch Mode: ACTIVE (auto-recompiles on changes)
✅ Status: Listening for requests
```

---

## 📋 Detailed Steps to Get MongoDB Running

### Choose Your MongoDB Setup (Pick ONE)

---

## **OPTION A: LOCAL MONGODB (Easiest for Beginners)**

### Step 1: Download MongoDB
Go to: https://www.mongodb.com/try/download/community
- Select your OS (Windows/macOS/Linux)
- Download the latest version (7.x or 8.x)

### Step 2: Install MongoDB

**Windows:**
1. Run the MSI installer
2. Follow the wizard
3. Install as Windows Service (recommended)
4. Finish installation

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

### Step 3: Verify Installation
```bash
mongosh
```
Should show connection prompt. Type `exit` to close.

### Step 4: Create `.env` File
In `backend/` folder, create `.env`:
```
MONGO_URI=mongodb://localhost:27017/skill-connect
PORT=3000
NODE_ENV=development
JWT_SECRET=dev-secret-key
```

### Step 5: Seed Database
```bash
mongosh
use skill-connect
```

Then copy-paste entire content of `SEED_HOME_DATA.js` into the shell.

### Step 6: Verify Data
```javascript
db.herocontent.countDocuments()  // Should show 1
db.skills.countDocuments()       // Should show 10
db.testimonials.countDocuments() // Should show 6
db.whychooseitems.countDocuments() // Should show 6
```

Type `exit` when done.

---

## **OPTION B: MONGODB ATLAS (Cloud - Recommended)**

### Step 1: Create Free Account
Go to: https://www.mongodb.com/cloud/atlas
- Sign up with email
- Verify email

### Step 2: Create Free Cluster
1. Click **Create** on dashboard
2. Select **Free** tier
3. Choose **AWS** + **Virginia** region
4. Click **Create Cluster** (wait 2-5 minutes)

### Step 3: Create Database User
1. Go to **Database Access** 
2. Click **Add New Database User**
3. Set:
   - Username: `skillconnect`
   - Password: Create a strong one (SAVE THIS!)
   - Privileges: Atlas admin
4. Click **Add User**

### Step 4: Whitelist Your IP
1. Go to **Network Access**
2. Click **Add IP Address**
3. Choose **Allow Access from Anywhere** (for dev)
4. Click **Confirm**

### Step 5: Get Connection String
1. Go back to **Clusters**
2. Click **Connect**
3. Choose **Drivers**
4. Copy connection string:
   ```
   mongodb+srv://skillconnect:PASSWORD@cluster.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

### Step 6: Create `.env` File
In `backend/` folder, create `.env`:
```
MONGO_URI=mongodb+srv://skillconnect:YOUR_PASSWORD@cluster.mongodb.net/skill-connect?retryWrites=true&w=majority
PORT=3000
NODE_ENV=development
JWT_SECRET=dev-secret-key
```
Replace `YOUR_PASSWORD` with your actual password!

### Step 7: Seed Database
```bash
mongosh "mongodb+srv://skillconnect:PASSWORD@cluster.mongodb.net/skill-connect"
```

Copy-paste entire `SEED_HOME_DATA.js` content into the shell.

### Step 8: Verify Data
Same as Option A, check document counts.

---

## **OPTION C: DOCKER (Isolated Environment)**

### Step 1: Install Docker
Download from: https://www.docker.com/products/docker-desktop
Install and run.

### Step 2: Start MongoDB in Docker
```bash
docker run -d \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  -v mongodb_data:/data/db \
  --name skill-connect-mongo \
  mongo:latest
```

### Step 3: Create `.env` File
```
MONGO_URI=mongodb://admin:password123@localhost:27017/skill-connect?authSource=admin
PORT=3000
NODE_ENV=development
JWT_SECRET=dev-secret-key
```

### Step 4: Seed Database
```bash
docker exec -it skill-connect-mongo mongosh -u admin -p password123
use skill-connect
```

Copy-paste `SEED_HOME_DATA.js` content.

### Step 5: Verify Data
Check document counts as shown above.

---

## 📝 Complete Setup Checklist

### ✅ MongoDB Setup
- [ ] Choose Option A, B, or C
- [ ] Follow all steps for your choice
- [ ] Successfully connected to MongoDB
- [ ] Created `.env` file with MONGO_URI
- [ ] Seeded database with sample data
- [ ] Verified all 23 documents inserted

### ✅ Backend Server
- [ ] Server is running in watch mode
- [ ] Compiled successfully (0 errors)
- [ ] Listening on http://localhost:3000

### ✅ Ready to Test
- [ ] All steps completed

---

## 🧪 Test Your Setup

Open a **NEW terminal** (keep server running in first terminal):

### Test Hero Endpoint
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

### Test Skills Endpoint
```bash
curl http://localhost:3000/home/skills
```

Expected: Array with 10 skills

### Test Featured Skills
```bash
curl http://localhost:3000/home/skills?featured=true
```

Expected: Array with 4 featured skills only

### Test Testimonials
```bash
curl http://localhost:3000/home/testimonials
```

Expected: Array with 6 testimonials

### Test High-Rated Testimonials
```bash
curl http://localhost:3000/home/testimonials?minRating=5
```

Expected: Array with 5-star ratings only

### Test Why Choose
```bash
curl http://localhost:3000/home/why-choose
```

Expected: Array with 6 items

---

## 🌐 Using Postman (Optional GUI Testing)

1. Download Postman: https://www.postman.com/downloads/
2. Create new requests:
   - `GET http://localhost:3000/home/hero`
   - `GET http://localhost:3000/home/skills`
   - `GET http://localhost:3000/home/testimonials`
   - `GET http://localhost:3000/home/why-choose`
3. Click **Send** for each
4. View response in lower panel

---

## 🗄️ View Data in MongoDB Compass (GUI)

1. Download MongoDB Compass: https://www.mongodb.com/products/tools/compass
2. Connect:
   - Local: `mongodb://localhost:27017`
   - Atlas: Use your connection string
   - Docker: `mongodb://admin:password123@localhost:27017`
3. Browse collections visually
4. View all documents
5. Edit data if needed

---

## 🆘 Troubleshooting

### Problem: "Cannot GET /home/hero"
**Cause:** Server not running or MONGO_URI not set
**Solution:**
1. Check terminal - server should show "Watching for file changes"
2. Create/check `.env` file exists
3. Verify MONGO_URI is correct
4. Restart server: Kill and run `npm run start:dev` again

### Problem: "MongooseError: Cannot connect to MongoDB"
**Cause:** MongoDB not running or wrong connection string
**Solution:**
- Local: Start MongoDB service (`mongosh` should work)
- Atlas: Check username, password, IP whitelist
- Docker: Verify container running (`docker ps`)

### Problem: "Command not found: mongosh"
**Cause:** MongoDB Shell not installed
**Solution:**
```bash
npm install -g mongosh
# Or download from: https://www.mongodb.com/try/download/shell
```

### Problem: "Database 'skill-connect' doesn't exist"
**Cause:** Haven't seeded yet or used wrong DB name
**Solution:**
1. Connect: `mongosh`
2. Switch: `use skill-connect`
3. Paste: Contents of `SEED_HOME_DATA.js`

### Problem: "No documents in collection"
**Cause:** Seeding failed or incomplete
**Solution:**
```bash
mongosh
use skill-connect
db.skills.countDocuments()  # Check each collection
# If 0, re-run SEED_HOME_DATA.js
```

---

## 📚 Documentation Files Created

| File | Purpose |
|------|---------|
| **MONGODB_SETUP_GUIDE.md** | Detailed MongoDB setup (this file) |
| **HOME_BACKEND_DOCUMENTATION.md** | Complete API reference |
| **INTEGRATION_GUIDE.md** | Frontend integration examples |
| **QUICK_REFERENCE.md** | Quick lookup |
| **ARCHITECTURE_DIAGRAMS.md** | System design |
| **SEED_HOME_DATA.js** | Sample database records |

---

## 🎯 What's Running Now

```
✅ NestJS Backend Server
   - Port: 3000
   - Watch Mode: ON
   - Status: Ready for requests

⏳ Waiting for You
   - MongoDB setup: Next step
   - Database seeding: After MongoDB
   - API testing: After seeding
```

---

## 📊 Current Status

```
Backend:     ✅ Running (http://localhost:3000)
MongoDB:     ⏳ Setup required (choose Option A/B/C above)
Database:    ⏳ Seeding required
API Ready:   ⏳ After MongoDB setup
Testing:     ⏳ After API ready
```

---

## 🚀 Next Immediate Actions

### For Local MongoDB Users:
```bash
# Terminal 1: Keep server running (already done)

# Terminal 2: Install MongoDB (if not done)
# Windows: Download MSI installer
# macOS: brew install mongodb-community
# Linux: sudo apt-get install -y mongodb-org

# Terminal 2: Create .env file
# backend/.env
# MONGO_URI=mongodb://localhost:27017/skill-connect

# Terminal 2: Seed database
mongosh
use skill-connect
[paste SEED_HOME_DATA.js]
exit

# Terminal 2: Test endpoints
curl http://localhost:3000/home/hero
```

### For MongoDB Atlas Users:
```bash
# Follow OPTION B steps above
# Main difference: Use cloud connection string
```

### For Docker Users:
```bash
# Run MongoDB container
docker run -d -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  -v mongodb_data:/data/db \
  --name skill-connect-mongo \
  mongo:latest

# Rest same as local MongoDB
```

---

## ✨ Success Criteria

You'll know everything is working when:

✅ `mongosh` connects without errors
✅ Database `skill-connect` contains 4 collections
✅ Collections have documents:
   - herocontent: 1
   - skills: 10
   - testimonials: 6
   - whychooseitems: 6
✅ `curl http://localhost:3000/home/hero` returns JSON
✅ All 5 endpoints respond with data

---

## 📞 Quick Help

**Server not responding?**
→ Check Terminal 1 for "Watching for file changes"

**MongoDB connection error?**
→ Verify MongoDB running, check MONGO_URI in .env

**No data showing?**
→ Check seeding completed, verify document counts

**Commands not found?**
→ Verify tools installed (mongosh, docker, node)

---

## 🎉 You're All Set!

Once MongoDB is configured and seeded:

1. **Backend API** ✅ Running
2. **Database** ✅ Connected
3. **Sample Data** ✅ Ready
4. **Endpoints** ✅ Responding
5. **Frontend Ready** ✅ Ready for integration

**Time to celebrate! Your Skill Connect AI backend is fully operational!** 🚀

---

**Created:** January 7, 2026  
**Status:** All systems GO  
**Next:** Choose MongoDB option and follow steps above
