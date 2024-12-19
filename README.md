
# Twitter Clone

A feature-rich Twitter clone built using the MERN stack, with modern front-end and back-end integrations.

## Features

- **Authentication:** Secure login/logout using JSON Web Tokens (JWT).
- **User Profile Management:**
  - Update profile and cover images.
  - Edit bio and personal details.
- **Posts:**
  - Create, delete (if the owner), like, and comment on posts.
  - Image uploads via Cloudinary.
- **Suggested Users:** Recommendations for users to follow.
- **Notifications:** Receive notifications for interactions.
- **Dynamic Feed:** Toggle between posts and liked posts on user profiles.
- **Optimized Data Fetching:** React Query for caching and real-time updates.

## Tech Stack

### Frontend
- **React.js:** Component-based UI.
- **Tailwind CSS:** Styling.
- **React Query:** Data fetching and caching.

### Backend
- **Node.js & Express:** Server-side logic.
- **MongoDB:** Database for storing user and post data.
- **Cloudinary:** Image uploads and management.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GautamShriharsh/TWITTER-CLONE
   cd twitter-clone

2. Install dependencies:
   ```bash
   # Backend
    cd twitter-clone
    npm install
   
   # Frontend
    cd frontend
    npm install

3. Setup .env file:
   ```bash
    MONGO_URI=...
    PORT=...
    JWT_SECRET=...
    NODE_ENV=...
    CLOUDINARY_CLOUD_NAME=...
    CLOUDINARY_API_KEY=...
    CLOUDINARY_API_SECRET=...

4. Build the app:
   ```bash
   npm run build   

5. Start the app
   ```bash
   npm run start

## Folder Structure

### Client

- **`/src`:** React components, pages, and utilities.
- **`/assets`:** Images and other assets.

### Server

- **`/routes`:** API routes for authentication, posts, and user management.
- **`/models`:** MongoDB schemas for users and posts.
- **`/controllers`:** Logic for handling API requests.

## Key Integrations

- **React Query:** Caching data for faster re-renders and offline support.
- **Cloudinary:** Efficient image upload and management.
- **JWT Authentication:** Securing endpoints and user sessions.




