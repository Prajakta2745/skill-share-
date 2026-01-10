# Home Backend - Quick Reference

## Project Structure
```
src/modules/home/
├── hero-content/          # Landing page hero section
├── skills/                # Skills catalog
├── testimonials/          # User testimonials
├── why-choose/            # Why Choose Us items
├── home.controller.ts     # Main aggregator
└── home.module.ts         # Root module
```

## API Endpoints

### GET /home/hero
**Response:**
```json
{
  "title": "string",
  "subtitle": "string",
  "primaryCtaText": "string",
  "secondaryCtaText": "string",
  "isActive": boolean
}
```
**Filters:** Only active content  
**Return:** Single object or null

---

### GET /home/skills
**Query:** `?featured=true` (optional)

**Response:**
```json
[
  {
    "name": "string",
    "icon": "string (emoji)",
    "popularityScore": 0-100,
    "isFeatured": boolean
  }
]
```
**Default:** All skills, sorted by popularity (high to low)  
**With featured=true:** Only featured skills  
**Return:** Array

---

### GET /home/testimonials
**Query:** `?minRating=1-5` (optional)

**Response:**
```json
[
  {
    "userName": "string",
    "role": "string",
    "message": "string",
    "rating": 1-5
  }
]
```
**Default:** All approved testimonials, sorted by rating (high to low)  
**With minRating:** Filtered by minimum rating  
**Return:** Array

---

### GET /home/why-choose
**Response:**
```json
[
  {
    "title": "string",
    "description": "string",
    "icon": "string (emoji)"
  }
]
```
**Filters:** None  
**Return:** Array

---

## Database Schemas

### HeroContent
```
title: string (required)
subtitle: string (required)
primaryCtaText: string (required)
secondaryCtaText: string (required)
isActive: boolean (default: true)
createdAt: Date (auto)
updatedAt: Date (auto)
```

### Skill
```
name: string (required)
icon: string (required)
popularityScore: number (0-100, required)
isFeatured: boolean (default: false)
createdAt: Date (auto)
updatedAt: Date (auto)
```

### Testimonial
```
userName: string (required)
role: string (required)
message: string (required)
rating: number (1-5, required)
isApproved: boolean (default: false)
createdAt: Date (auto)
updatedAt: Date (auto)
```

### WhyChooseItem
```
title: string (required)
description: string (required)
icon: string (required)
createdAt: Date (auto)
updatedAt: Date (auto)
```

---

## Service Methods

### HeroContentService
- `getActiveHeroContent()` → HeroContentDto | null

### SkillService
- `getFeaturedSkills()` → SkillDto[]
- `getAllSkills()` → SkillDto[]

### TestimonialService
- `getApprovedTestimonials()` → TestimonialDto[]
- `getTestimonialsByRating(minRating)` → TestimonialDto[]

### WhyChooseItemService
- `getAllWhyChooseItems()` → WhyChooseItemDto[]

---

## Common cURL Examples

```bash
# Get hero
curl http://localhost:3000/home/hero

# Get all skills
curl http://localhost:3000/home/skills

# Get featured skills
curl http://localhost:3000/home/skills?featured=true

# Get all testimonials
curl http://localhost:3000/home/testimonials

# Get 5-star testimonials
curl http://localhost:3000/home/testimonials?minRating=5

# Get why choose items
curl http://localhost:3000/home/why-choose
```

---

## NPM Commands

```bash
# Development
npm run start:dev          # Watch mode

# Production
npm run build              # Compile TypeScript
npm run start:prod         # Run compiled code

# Quality
npm run lint               # ESLint + fix
npm test                   # Run tests
npm run test:cov           # With coverage

# Cleanup
rm -rf dist/               # Remove build output
rm -rf node_modules/       # Remove dependencies
```

---

## Environment Variables

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/skill-connect
NODE_ENV=development
JWT_SECRET=your-secret-key
```

---

## Files Created/Modified

### New Files (Home Module)
- ✅ `src/modules/home/home.controller.ts`
- ✅ `src/modules/home/home.module.ts`
- ✅ `src/modules/home/hero-content/*`
- ✅ `src/modules/home/skills/*`
- ✅ `src/modules/home/testimonials/*`
- ✅ `src/modules/home/why-choose/*`

### Modified Files
- ✅ `src/app.module.ts` - Added HomeModule import
- ✅ `src/modules/auth/auth.service.ts` - Fixed import path

### Documentation
- ✅ `HOME_BACKEND_DOCUMENTATION.md` - Complete API reference
- ✅ `INTEGRATION_GUIDE.md` - Frontend integration examples
- ✅ `SEED_HOME_DATA.js` - MongoDB seed data
- ✅ `QUICK_REFERENCE.md` - This file

---

## Key Features

✅ Modular architecture (one module per entity)  
✅ DTOs for type safety  
✅ MongoDB lean queries for performance  
✅ Automatic timestamps (createdAt, updatedAt)  
✅ Data filtering (active, approved, featured)  
✅ Query parameters for flexible filtering  
✅ Clean, frontend-friendly JSON responses  
✅ No authentication required  
✅ ESLint compliant code  
✅ Production-ready structure  

---

## Implementation Checklist

- ✅ Create HeroContent module
- ✅ Create Skill module  
- ✅ Create Testimonial module
- ✅ Create WhyChooseItem module
- ✅ Create Home aggregator controller
- ✅ Register modules in AppModule
- ✅ Fix type safety issues
- ✅ Pass ESLint checks
- ✅ Successfully build with NestJS
- ✅ Seed data file created
- ✅ Documentation complete

---

## Testing Endpoints

**Without Data:**
- All endpoints return empty arrays or null

**With Seed Data:**
- Hero: 1 active item
- Skills: 10 items (4 featured)
- Testimonials: 6 approved items
- Why Choose: 6 items

**Verify with:**
```bash
# Should return 1 hero object
curl http://localhost:3000/home/hero

# Should return 10 skills
curl http://localhost:3000/home/skills

# Should return 4 featured skills
curl http://localhost:3000/home/skills?featured=true

# Should return 6 testimonials
curl http://localhost:3000/home/testimonials

# Should return 6 items
curl http://localhost:3000/home/why-choose
```

---

**Status:** ✅ Ready for Development & Testing  
**Created:** January 7, 2026  
**Backend Version:** 1.0.0  
**Framework:** NestJS + MongoDB  
