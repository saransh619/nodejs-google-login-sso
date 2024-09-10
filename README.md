# Google Login with Node.js and TypeScript

## Overview

This project demonstrates how to implement Google Single Sign-On (SSO) in a Node.js application using TypeScript and Passport.js. It allows users to authenticate using their Google account and manage sessions with Express and `express-session`.

## Features

- Google OAuth 2.0 authentication
- User session management with Express and Passport
- TypeScript for static type checking
- Environment variable configuration with `dotenv`

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 14.x)
- pnpm (preferred) or npm (>= 6.x)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saransh619/google-login.git
   cd google-login
   ```

2. **Install dependencies and build the project:**

   ```bash
   pnpm install
   pnpm build

   ```

3. **Configure environment variables:**

   ```bash
   SESSION_SECRET=<your-session-secret>
   CLIENT_ID=<your-google-client-id>
   CLIENT_SECRET=<your-google-client-secret>
   ```

4. **Start the server:**

   ```bash
   pnpm start
   ```

# Access the Application

Login: http://localhost:3000/auth/google
Success: http://localhost:3000/success

# Contributing

Feel free to open issues and submit pull requests. Contributions are welcome!
