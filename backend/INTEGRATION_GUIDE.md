# Home Page Backend - Integration Guide

## Quick Start

### 1. Install Dependencies (if not already done)
```bash
cd backend
npm install
```

### 2. Populate Database with Seed Data

#### Option A: Using MongoDB Shell
```bash
# Connect to MongoDB
mongosh

# Switch to your database
use skill-connect

# Copy the contents of SEED_HOME_DATA.js and paste in the shell
```

#### Option B: Using MongoDB Compass
1. Open MongoDB Compass
2. Connect to your MongoDB instance
3. Navigate to your `skill-connect` database
4. Click on each collection and import the sample data

#### Option C: Programmatic Seed (NestJS)
Create a `src/common/database/seeders/home.seeder.ts` file if you want to seed on startup.

### 3. Start the Backend Server

**Development Mode:**
```bash
npm run start:dev
```

**Production Mode:**
```bash
npm run build
npm run start:prod
```

Server will run on `http://localhost:3000`

---

## API Endpoints Summary

All endpoints return JSON and require **no authentication**.

| Method | Endpoint                    | Description                      |
|--------|---------------------------|----------------------------------|
| GET    | `/home/hero`              | Get active hero section content  |
| GET    | `/home/skills`            | Get all skills                   |
| GET    | `/home/skills?featured=true` | Get featured skills only       |
| GET    | `/home/testimonials`      | Get all approved testimonials    |
| GET    | `/home/testimonials?minRating=4` | Get testimonials with 4+ rating |
| GET    | `/home/why-choose`        | Get "Why Choose Us" items        |

---

## Testing with cURL

### Test Hero Content
```bash
curl http://localhost:3000/home/hero
```

### Test All Skills
```bash
curl http://localhost:3000/home/skills
```

### Test Featured Skills
```bash
curl http://localhost:3000/home/skills?featured=true
```

### Test Testimonials
```bash
curl http://localhost:3000/home/testimonials
```

### Test High-Rated Testimonials
```bash
curl http://localhost:3000/home/testimonials?minRating=5
```

### Test Why Choose Section
```bash
curl http://localhost:3000/home/why-choose
```

---

## Postman Collection Example

```json
{
  "info": {
    "name": "Skill Connect Home API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Hero Content",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/home/hero"
      }
    },
    {
      "name": "All Skills",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/home/skills"
      }
    },
    {
      "name": "Featured Skills",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/home/skills?featured=true"
      }
    },
    {
      "name": "All Testimonials",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/home/testimonials"
      }
    },
    {
      "name": "High-Rated Testimonials",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/home/testimonials?minRating=4"
      }
    },
    {
      "name": "Why Choose Us",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/home/why-choose"
      }
    }
  ]
}
```

---

## Frontend Integration Example

### React Component
```typescript
import { useEffect, useState } from 'react';

interface HomePageData {
  hero: HeroContent | null;
  skills: Skill[];
  testimonials: Testimonial[];
  whyChoose: WhyChooseItem[];
}

export function HomePage() {
  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [heroRes, skillsRes, testimonialRes, whyChooseRes] = 
          await Promise.all([
            fetch('/home/hero'),
            fetch('/home/skills?featured=true'),
            fetch('/home/testimonials?minRating=4'),
            fetch('/home/why-choose'),
          ]);

        const [hero, skills, testimonials, whyChoose] = await Promise.all([
          heroRes.json(),
          skillsRes.json(),
          testimonialRes.json(),
          whyChooseRes.json(),
        ]);

        setData({ hero, skills, testimonials, whyChoose });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Hero Section */}
      {data?.hero && (
        <section className="hero">
          <h1>{data.hero.title}</h1>
          <p>{data.hero.subtitle}</p>
          <button>{data.hero.primaryCtaText}</button>
          <button>{data.hero.secondaryCtaText}</button>
        </section>
      )}

      {/* Skills Section */}
      <section className="skills">
        <h2>Featured Skills</h2>
        <div className="skills-grid">
          {data?.skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>Popularity: {skill.popularityScore}%</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {data?.whyChoose.map((item) => (
            <div key={item.title} className="feature-card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          {data?.testimonials.map((testimonial) => (
            <div key={testimonial.userName} className="testimonial-card">
              <div className="rating">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="message">"{testimonial.message}"</p>
              <p className="author">{testimonial.userName}</p>
              <p className="role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## Environment Configuration

### Local Development (.env)
```
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://localhost:27017/skill-connect
JWT_SECRET=your-dev-secret-key
```

### Production (.env.production)
```
NODE_ENV=production
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/skill-connect
JWT_SECRET=your-prod-secret-key
```

---

## Database Collections

The following MongoDB collections will be created:

1. **herocontent** - Single or few documents with landing page hero section
2. **skills** - Skills catalog with popularity and featured flags
3. **testimonials** - User testimonials with approval status
4. **whycooseitems** - "Why Choose Us" feature list

---

## File Structure

```
src/modules/home/
├── hero-content/
│   ├── dto/
│   │   └── hero-content.dto.ts          # Data Transfer Object
│   ├── hero-content.controller.ts       # HTTP endpoints
│   ├── hero-content.module.ts           # Module definition
│   ├── hero-content.schema.ts           # MongoDB schema
│   └── hero-content.service.ts          # Business logic
├── skills/
│   ├── dto/skill.dto.ts
│   ├── skill.controller.ts
│   ├── skill.module.ts
│   ├── skill.schema.ts
│   └── skill.service.ts
├── testimonials/
│   ├── dto/testimonial.dto.ts
│   ├── testimonial.controller.ts
│   ├── testimonial.module.ts
│   ├── testimonial.schema.ts
│   └── testimonial.service.ts
├── why-choose/
│   ├── dto/why-choose-item.dto.ts
│   ├── why-choose-item.controller.ts
│   ├── why-choose-item.module.ts
│   ├── why-choose-item.schema.ts
│   └── why-choose-item.service.ts
├── home.controller.ts                   # Main aggregator controller
└── home.module.ts                       # Root home module
```

---

## Key Implementation Details

### Data Filtering Strategy

**Hero Content:**
- Only returns active hero content (`isActive: true`)
- Returns null if no active hero exists

**Skills:**
- Default: Returns all skills sorted by popularity score (descending)
- With `?featured=true`: Returns only featured skills

**Testimonials:**
- Default: Returns only approved testimonials (`isApproved: true`)
- Sorted by rating (descending), then by creation date
- With `?minRating=X`: Filters by minimum rating while maintaining approval filter

**Why Choose Items:**
- Returns all items (no filtering)
- Order determined by database insertion order

### Performance Optimizations

1. **Lean Queries**: Uses MongoDB `.lean()` to return plain objects instead of Mongoose documents
2. **Efficient Sorting**: Database-level sorting prevents in-memory processing
3. **Field Selection**: DTOs only return necessary fields, hiding internal database fields
4. **Stateless Services**: Each service is independent and reusable

---

## Error Handling

The API handles errors gracefully:

- **404 Not Found**: If a resource doesn't exist, endpoints return `null` or empty arrays
- **500 Server Error**: Database connection errors are handled by NestJS middleware
- **CORS**: Configure CORS in `main.ts` if frontend is on different origin

---

## Future Enhancements

1. **Pagination** - Add limit/offset for large datasets
2. **Caching** - Use Redis to cache frequently accessed content
3. **Admin CUD** - Add create/update/delete endpoints with authentication
4. **Validation** - Add `class-validator` decorators for input validation
5. **Rate Limiting** - Protect public endpoints from abuse
6. **Swagger Docs** - Add `@nestjs/swagger` for API documentation
7. **Soft Deletes** - Add `isDeleted` flags for logical deletion
8. **Timestamps** - Already implemented with `createdAt` and `updatedAt`

---

## Troubleshooting

### Issue: Cannot connect to MongoDB
**Solution:** Verify `MONGO_URI` environment variable is correct and MongoDB service is running

### Issue: CORS errors in frontend
**Solution:** Add CORS configuration in `main.ts`:
```typescript
app.enableCors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
});
```

### Issue: Endpoints return empty arrays/null
**Solution:** Check that seed data is properly inserted in MongoDB

### Issue: Port already in use
**Solution:** Change PORT in `.env` or kill the process using port 3000

---

## Additional Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Last Updated:** January 7, 2026
**Backend Version:** 1.0.0
**Status:** ✅ Production Ready
