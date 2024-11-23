# The Directory
#### Video Demo:  <https://www.youtube.com/watch?v=M5pvWUNmnoo>
#### Description:


# The Directory

## Overview
The Directory is a web application designed to facilitate the sharing of educational resources between students and teachers. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform allows users to organize, share, and evaluate educational links across different subject areas. Users can create accounts, contribute links, and participate in content curation through a voting system that automatically sorts resources based on community feedback.

## Features
- **User Authentication System**
  - Secure registration and login functionality
  - Password encryption using bcrypt
  - JWT-based authentication for protected routes
  - Session management with secure logout

- **Resource Management**
  - Organized sections for different subjects/topics
  - Easy link sharing with title and description
  - Voting system (like/dislike) for content curation
  - Automatic sorting based on vote count
  - Visit counter for tracking resource popularity

## Technical Stack

### Frontend (React.js)
- **React Router** for client-side routing
- **Axios** for API communication
- **CSS** for styling

### Backend (Node.js/Express.js)
- **Express.js** for RESTful API implementation
- **Mongoose** for MongoDB object modeling
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Cors** for cross-origin resource sharing

### Database (MongoDB)
- Collections for users, resources, and sections
- Indexed fields for efficient querying
- Relationships between collections for data integrity


## Development Journey and Challenges

### Initial Stack Choice
Initially, I attempted to build the backend using Python and Flask. However, I encountered several challenges:
- Difficulty in setting up the database relationships
- Limited experience with Python web development

This led me to switch to the MERN stack, which offered:
- Better documentation and community support
- Unified JavaScript across the stack
- Simpler implementation of real-time features
- More straightforward database schema design

### Key Challenges Overcome

1. **RESTful API Design**
   - Structured the API endpoints for scalability
   - Implemented proper error handling
   - Managed asynchronous operations effectively

2. **Authentication System**
   - Implemented secure password hashing
   - Created middleware for route protection
   - Managed user sessions securely

3. **Real-time Vote Updates**
   - Implemented optimistic updates in the frontend
   - Handled race conditions in voting system
   - Ensured consistent state across multiple users

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/lenguyenduyphuc/The-Directory.git
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd ../frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# In server directory
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

4. Run the application:
```bash
# Run backend (from server directory)
npm run dev

# Run frontend (from client directory)
npm run dev
```

## Future Improvements

- Implement real-time updates using WebSocket
- Add user profiles and achievement system
- Introduce resource categories and tags
- Add search functionality with filters
- Implement resource recommendations
- Add social features (comments, sharing)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
