# SereneSphere: A Next.js & Tailwind Application with WebGL Animations

Welcome to SereneSphere! This is a beautiful, interactive web application built with Next.js, TypeScript, and Tailwind CSS. It features a daily self-care task generator, a mesmerizing WebGL animated background, and a subtle ripple effect that follows your cursor, creating a peaceful and visually engaging experience.

## ✨ Features

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** A simple, clean component structure using Lucide icons.
- **API Routes:** Example API route for fetching daily tasks.
- **WebGL Animations:**
  - Dynamic background animation using `@react-three/fiber` and `@react-three/drei`.
  - Interactive cursor ripple effect using `react-curtains`.
- **Database:** Pre-configured for easy integration with Supabase using `@supabase/ssr`.
- **Package Manager:** Uses `pnpm` for efficient dependency management.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [pnpm](https://pnpm.io/installation) (Install with `npm install -g pnpm`)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd your-repository
    ```

3.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Environment Variables

This project will be set up to use Supabase for data fetching.

1.  Create a new file named `.env.local` in the root of your project.
2.  Add your Supabase project URL and anon key to the file:

    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```

    _Note: If you don't provide these variables, the daily task feature will fall back to a local, hard-coded list of tasks._

### Running the Development Server

1.  Start the server:

    ```bash
    pnpm dev
    ```

2.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.io/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [react-curtains](https://www.react-curtains.com/)
- [Lucide React](https://lucide.dev/)
