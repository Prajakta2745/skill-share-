# Home Page Backend Documentation

## Overview
Complete backend implementation for the Home (Landing) page using NestJS + MongoDB with clean, reusable modules for each entity.

---

## Project Structure

```
src/modules/home/
├── hero-content/
│   ├── dto/
│   │   └── hero-content.dto.ts
│   ├── hero-content.controller.ts
│   ├── hero-content.module.ts
│   ├── hero-content.schema.ts
│   └── hero-content.service.ts
├── skills/
│   ├── dto/
│   │   └── skill.dto.ts
│   ├── skill.controller.ts
│   ├── skill.module.ts
│   ├── skill.schema.ts
│   └── skill.service.ts
├── testimonials/
│   ├── dto/
│   │   └── testimonial.dto.ts
│   ├── testimonial.controller.ts
│   ├── testimonial.module.ts
│   ├── testimonial.schema.ts
│   └── testimonial.service.ts
├── why-choose/
│   ├── dto/
│   │   └── why-choose-item.dto.ts
│   ├── why-choose-item.controller.ts
│   ├── why-choose-item.module.ts
│   ├── why-choose-item.schema.ts
│   └── why-choose-item.service.ts
├── home.controller.ts
└── home.module.ts
```

---

## API Endpoints

All endpoints are **public** - no authentication required.

### 1. Hero Content
**GET `/home/hero`**

Returns the active hero section content for the landing page.

**Response Example:**
```json
{
  "title": "Welcome to Skill Connect AI",
  "subtitle": "Master in-demand skills with AI-powered personalized learning paths",
  "primaryCtaText": "Start Learning",
  "secondaryCtaText": "Explore Skills",
  "isActive": true
}
```

**Notes:**
- Returns only active hero content (`isActive: true`)
- If no active hero exists, returns `null`

---

### 2. Skills
**GET `/home/skills`**

Fetches skills sorted by popularity score (highest first).

**Query Parameters:**
- `featured` (optional): Pass `true` to fetch only featured skills

**Response Example (All Skills):**
```json
[
  {
    "name": "TypeScript",
    "icon": "📘",
    "popularityScore": 95,
    "isFeatured": true
  },
  {
    "name": "Python",
    "icon": "🐍",
    "popularityScore": 92,
    "isFeatured": true
  },
  {
    "name": "React",
    "icon": "⚛️",
    "popularityScore": 90,
    "isFeatured": true
  },
  {
    "name": "Node.js",
    "icon": "🟢",
    "popularityScore": 88,
    "isFeatured": false
  }
]
```

**Example Requests:**
```
GET /home/skills
GET /home/skills?featured=true
```

---

### 3. Testimonials
**GET `/home/testimonials`**

Fetches approved testimonials sorted by rating (highest first).

**Query Parameters:**
- `minRating` (optional): Filter testimonials with minimum rating (1-5). Defaults to all approved.

**Response Example:**
```json
[
  {
    "userName": "Sarah Johnson",
    "role": "Software Engineer at Google",
    "message": "Skill Connect AI transformed my career. The personalized learning paths are incredibly effective!",
    "rating": 5
  },
  {
    "userName": "Mike Chen",
    "role": "Full Stack Developer",
    "message": "Great platform with comprehensive content. Highly recommend it!",
    "rating": 5
  },
  {
    "userName": "Emma Davis",
    "role": "Data Scientist",
    "message": "The AI recommendations are spot-on. Learned new concepts faster than ever.",
    "rating": 4
  }
]
```

**Example Requests:**
```
GET /home/testimonials
GET /home/testimonials?minRating=4
GET /home/testimonials?minRating=5
```

---

### 4. Why Choose Us
**GET `/home/why-choose`**

Returns a list of reasons why users should choose this platform.

**Response Example:**
```json
[
  {
    "title": "AI-Powered Learning",
    "description": "Personalized learning paths adapted to your pace and style using cutting-edge AI algorithms",
    "icon": "🤖"
  },
  {
    "title": "Industry-Relevant Skills",
    "description": "Learn skills demanded by top tech companies in 2024 and beyond",
    "icon": "🎯"
  },
  {
    "title": "Flexible Schedule",
    "description": "Learn at your own pace with courses available 24/7, fitting your lifestyle",
    "icon": "⏰"
  },
  {
    "title": "Expert Instructors",
    "description": "Learn from experienced professionals working at leading tech companies",
    "icon": "👨‍🏫"
  },
  {
    "title": "Community Support",
    "description": "Join a thriving community of learners, share knowledge, and grow together",
    "icon": "👥"
  },
  {
    "title": "Certification Ready",
    "description": "Earn recognized certifications that boost your resume and career prospects",
    "icon": "🏆"
  }
]
```

---

## Database Schemas

### HeroContent Schema
```typescript
{
  title: string (required)
  subtitle: string (required)
  primaryCtaText: string (required)
  secondaryCtaText: string (required)
  isActive: boolean (default: true)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

### Skill Schema
```typescript
{
  name: string (required)
  icon: string (required) // emoji or icon class
  popularityScore: number (required, 0-100)
  isFeatured: boolean (default: false)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

### Testimonial Schema
```typescript
{
  userName: string (required)
  role: string (required)
  message: string (required)
  rating: number (required, 1-5)
  isApproved: boolean (default: false)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

### WhyChooseItem Schema
```typescript
{
  title: string (required)
  description: string (required)
  icon: string (required) // emoji or icon class
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

---

## Sample Seed Data

### Hero Content Sample
```json
{
  "title": "Welcome to Skill Connect AI",
  "subtitle": "Master in-demand skills with AI-powered personalized learning paths",
  "primaryCtaText": "Start Learning Free",
  "secondaryCtaText": "Watch Demo",
  "isActive": true
}
```

### Skills Samples
```json
[
  { "name": "TypeScript", "icon": "📘", "popularityScore": 95, "isFeatured": true },
  { "name": "Python", "icon": "🐍", "popularityScore": 92, "isFeatured": true },
  { "name": "React", "icon": "⚛️", "popularityScore": 90, "isFeatured": true },
  { "name": "Node.js", "icon": "🟢", "popularityScore": 88, "isFeatured": true },
  { "name": "MongoDB", "icon": "🍃", "popularityScore": 85, "isFeatured": false },
  { "name": "Docker", "icon": "🐳", "popularityScore": 82, "isFeatured": false },
  { "name": "Next.js", "icon": "⚡", "popularityScore": 80, "isFeatured": false },
  { "name": "GraphQL", "icon": "📊", "popularityScore": 75, "isFeatured": false }
]
```

### Testimonials Samples
```json
[
  {
    "userName": "Sarah Johnson",
    "role": "Software Engineer at Google",
    "message": "Skill Connect AI transformed my career. The personalized learning paths are incredibly effective!",
    "rating": 5,
    "isApproved": true
  },
  {
    "userName": "Mike Chen",
    "role": "Full Stack Developer",
    "message": "Great platform with comprehensive content. Highly recommend it!",
    "rating": 5,
    "isApproved": true
  },
  {
    "userName": "Emma Davis",
    "role": "Data Scientist",
    "message": "The AI recommendations are spot-on. Learned new concepts faster than ever.",
    "rating": 4,
    "isApproved": true
  },
  {
    "userName": "James Wilson",
    "role": "Product Manager at Meta",
    "message": "Excellent learning platform. Very structured and easy to follow.",
    "rating": 5,
    "isApproved": true
  },
  {
    "userName": "Lisa Anderson",
    "role": "DevOps Engineer",
    "message": "Loved the course material and community support. Worth every penny!",
    "rating": 5,
    "isApproved": true
  }
]
```

### Why Choose Items Sample
```json
[
  {
    "title": "AI-Powered Learning",
    "description": "Personalized learning paths adapted to your pace and style using cutting-edge AI algorithms",
    "icon": "🤖"
  },
  {
    "title": "Industry-Relevant Skills",
    "description": "Learn skills demanded by top tech companies in 2024 and beyond",
    "icon": "🎯"
  },
  {
    "title": "Flexible Schedule",
    "description": "Learn at your own pace with courses available 24/7, fitting your lifestyle",
    "icon": "⏰"
  },
  {
    "title": "Expert Instructors",
    "description": "Learn from experienced professionals working at leading tech companies",
    "icon": "👨‍🏫"
  },
  {
    "title": "Community Support",
    "description": "Join a thriving community of learners, share knowledge, and grow together",
    "icon": "👥"
  },
  {
    "title": "Certification Ready",
    "description": "Earn recognized certifications that boost your resume and career prospects",
    "icon": "🏆"
  }
]
```

---

## Key Features

✅ **Modular Architecture**: Each entity has its own module with schema, DTO, service, and controller

✅ **DTOs with Validation Ready**: DTO structures in place, can be enhanced with `class-validator`

✅ **Clean Data Filtering**: 
- Only active hero content
- Only approved testimonials
- Sorted by relevance (popularity score, rating)

✅ **Query Parameters**: Support for filtering (featured skills, min rating for testimonials)

✅ **Frontend-Friendly JSON**: Returns only necessary fields, no internal database fields

✅ **Public Endpoints**: No authentication required for home page content

✅ **Lean Queries**: MongoDB `.lean()` optimization for read-only operations

---

## Environment Variables

Ensure your `.env` file contains:

```
MONGO_URI=mongodb://localhost:27017/skill-connect
PORT=3000
JWT_SECRET=your-secret-key
```

---

## Enhancement Ideas

1. **Add Pagination** to skills and testimonials for large datasets
2. **Add Caching** with Redis for frequently accessed home content
3. **Add Admin DTOs** for create/update/delete operations (admin only)
4. **Add Validation** using `class-validator` decorators in DTOs
5. **Add Rate Limiting** for public endpoints
6. **Add Swagger/OpenAPI** documentation
7. **Add Soft Delete** for entities (isDeleted flag)

---

## Usage Example (Frontend)

```typescript
// Fetch all home page data
async function getHomePageData() {
  try {
    const [hero, skills, testimonials, whyChoose] = await Promise.all([
      fetch('/home/hero').then(r => r.json()),
      fetch('/home/skills').then(r => r.json()),
      fetch('/home/testimonials').then(r => r.json()),
      fetch('/home/why-choose').then(r => r.json()),
    ]);

    return { hero, skills, testimonials, whyChoose };
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
  }
}

// Fetch featured skills only
async function getFeaturedSkills() {
  const response = await fetch('/home/skills?featured=true');
  return response.json();
}

// Fetch high-rated testimonials (4+ stars)
async function getTopTestimonials() {
  const response = await fetch('/home/testimonials?minRating=4');
  return response.json();
}
```

---

## Running the Server

```bash
# Install dependencies
npm install

# Development mode with watch
npm run start:dev

# Production build
npm run build
npm run start:prod
```

The server will run on `http://localhost:3000` by default.

---

**Created on**: January 7, 2026
**Status**: Ready for Development
