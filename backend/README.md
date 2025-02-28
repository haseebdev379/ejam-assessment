# Humble Superhero API

A NestJS-based API that celebrates team members by tracking their superpowers and humility scores.

## Project Overview

This API allows users to:
- Add new superheroes with their unique powers and humility scores
- Retrieve a list of superheroes sorted by their humility scores
- Validate superhero data with built-in constraints

## Technical Stack

- NestJS framework
- TypeScript
- Jest for testing
- Class-validator for DTO validation
- In-memory data storage

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

## API Endpoints

### POST /superheroes
Create a new superhero
```json
{
  "name": "string",
  "superpower": "string",
  "humilityScore": number (1-10)
}
```

### GET /superheroes
Retrieve all superheroes sorted by humility score

## Testing

Run the test suite:
```bash
npm run test
```

## Collaboration Guide

### For Team Members

1. **Code Structure**
   - Controllers: Handle HTTP requests
   - Services: Contain business logic
   - DTOs: Define data transfer objects
   - Tests: Maintain test coverage

2. **Development Workflow**
   - Create feature branches from `main`
   - Follow conventional commits (feat:, fix:, docs:, etc.)
   - Write tests for new features
   - Request code reviews before merging

3. **Best Practices**
   - Keep methods focused and single-responsibility
   - Document API changes
   - Maintain test coverage
   - Use TypeScript types strictly

### Code Review Guidelines

- Check for proper error handling
- Verify input validation
- Ensure test coverage
- Review documentation updates
- Look for code optimization opportunities

## Future Improvements

1. **Technical Enhancements**
   - [ ] Add PostgreSQL database integration
   - [ ] Implement authentication/authorization
   - [ ] Add Swagger API documentation
   - [ ] Set up CI/CD pipeline

2. **Feature Ideas**
   - [ ] Add superhero teams functionality
   - [ ] Implement superhero achievements
   - [ ] Add profile images support
   - [ ] Create statistics dashboard

3. **Performance & Security**
   - [ ] Add rate limiting
   - [ ] Implement caching
   - [ ] Add security headers
   - [ ] Set up logging service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Team Communication

- Use GitHub Issues for bug reports and feature requests
- Document technical decisions in ADRs (Architecture Decision Records)
- Maintain up-to-date API documentation
- Regular code review sessions
- Weekly sync meetings for technical discussions

## License

This project is licensed under the MIT License - see the LICENSE file for details
