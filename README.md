# StudioSpace - Peer-to-Peer Creative Workspace & Production Studio Sharing Platform

StudioSpace is a high-performance peer-to-peer marketplace designed for creators, filmmakers, photographers, podcasters, and musicians to list, discover, and reserve studio spaces with dynamic availability and transparent pricing.

**Live Website URL:** https://studio-space-client.vercel.app

---

## Key Features

- **Interactive Workspace Discovery:** Browse, filter, and inspect dynamic availability for photo studios, sound stages, podcast lounges, and music suites.
- **Complete CRUD Operations:** Studio owners can easily list new spaces, update specifications, pre-fill existing data, and remove listings with modal confirmation.
- **Seamless Booking Management:** Reserve studio slots with real-time status tracking (Pending, Confirmed, Completed, Cancelled) and cancellation options.
- **Robust Authentication:** Secure user signup, login with strict password validation rules, and Google Social OAuth integration powered by BetterAuth.
- **Modern Responsive UI:** Clean design featuring Swiper hero slider, skeleton loading states, Sonner/React Hot Toast notifications, and full responsiveness across mobile, tablet, and desktop views.

---

## Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, DaisyUI, Swiper.js, React Hot Toast / Sonner
- **Authentication:** BetterAuth, Google OAuth, MongoDB Adapter
- **Backend:** Express.js, Node.js, MongoDB
- **Hosting:** Vercel (Client & Server)

---

## Local Setup Instructions

To run **StudioSpace** locally on your machine, both the Backend Server and Frontend Client need to be set up and running simultaneously.

### Prerequisites

- **Node.js**: v18.x or higher
- **npm** or **yarn** or **pnpm**
- **MongoDB Atlas** database URI or local MongoDB connection

---

### Step 1: Backend Server Setup

1. **Clone the Server repository:**
git clone https://github.com/miad253062/StudioSpace-server.git
cd StudioSpace-server

2. **Install server dependencies:**
npm install

3. **Configure Environment Variables:**
Create a `.env` file in the root directory of the server project and add:
PORT=5000
DATABASE_URL=your_mongodb_connection_string(with database username and password)
CLIENT_URL=http://localhost:3000


4. **Start the Backend Server:**
npm run dev

The backend API server will start running at `http://localhost:5000`.

---

### Step 2: Frontend Client Setup

1. **Clone the Client repository:**
git clone https://github.com/miad253062/StudioSpace-client.git
cd StudioSpace-client

2. **Install client dependencies:**
npm install

3. **Configure Environment Variables:**
Create a `.env` file in the root directory of the client project and add:
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_better_auth_secret
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CLIENT_ID=your_google_client_id

4. **Start the Frontend Development Server:**
npm run dev

Open http://localhost:3000 in your browser to view the application.

---

## Examiner Test Credentials

To inspect private routes and host functionalities, use the following credentials:

- **Email:** testuser@studiospace.com
- **Password:** Studio@2026