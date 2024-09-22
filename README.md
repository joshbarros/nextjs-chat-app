# Next.js Chat Application

This project is a real-time chat application built with [Next.js](https://nextjs.org), using modern front-end technologies such as WebSockets, TailwindCSS, and a collection of reusable components. The app provides functionality for user authentication, chat rooms, and real-time messaging.

## Features

- **User Authentication**: Users can register and log in to their accounts.
- **Real-time Chat**: Utilizes WebSockets for real-time communication in chat rooms.
- **Multiple Chat Rooms**: Users can create and join multiple chat rooms.
- **Message History**: Displays the last 50 messages from chat rooms.
- **Responsive UI**: A mobile-first design with navigation support for small and large screens.

## Key Dependencies

- **Next.js 14.2.13**: A modern React-based framework for server-side rendering and static websites.
- **React 18**: Front-end JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for quickly styling the app.
- **WebSocket**: For real-time messaging functionality.
- **Radix UI**: Provides the reusable UI components used for buttons, dialogs, and drawers.
- **JWT Decode**: For decoding and handling JSON Web Tokens.

## Chat Features (In Progress)

### WebSocket-based Real-time Chat

The chat functionality uses WebSockets to provide real-time communication between users. Users can join chat rooms and exchange messages, which are handled by WebSocket connections.

- **In Progress**:
  - Real-time message broadcasting across all users in the room.
  - Chat room creation and deletion.
  - Message persistence using a backend API.

## How to Run the Project

### Prerequisites

- **Node.js**: Ensure that Node.js is installed (v18 or higher).
- **NPM**: You should have npm or an equivalent package manager like Yarn, pnpm, or Bun installed.

### Steps to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nextjs-chat-app.git
   cd nextjs-chat-app
   ```

2. Install the dependencies:

    ```bash
    npm install
    Run the development server:
    ```

    ```bash
    npm run dev
    ```

3. Open http://localhost:3001 in your browser to see the application.

4. Building the Project
    To create a production build, run:

    ```bash
    npm run build
    ```
This command will create an optimized production build of the app.

Linting and Formatting
To run ESLint and check for any code quality issues:

    ```bash
    npm run lint
    ```

## Authentication

- **`auth/login/page.tsx`**: The login page allows users to log in using their email and password.
- **`auth/register/page.tsx`**: The registration page for creating new accounts.

## Dashboard and Chat Rooms

- **`dashboard/rooms/page.tsx`**: Displays a list of available chat rooms and allows users to create new rooms.
- **`dashboard/rooms/[id]/page.tsx`**: A dynamic route that opens the chat interface for a specific room based on the room ID.

## Deployment

This app can easily be deployed on platforms like [Vercel](https://vercel.com) or [Netlify](https://netlify.com). For Next.js deployment instructions, refer to the [official docs](https://nextjs.org/docs/app/building-your-application/deploying).

## Conclusion

This is a work-in-progress real-time chat application leveraging modern tools like Next.js, TailwindCSS, WebSockets, and more. Contributions are welcome to enhance the chat functionality and add more features.

Feel free to reach out with suggestions or improvements!
