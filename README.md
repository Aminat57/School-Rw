# Primary School Website

This is a React-based school website with a structured component layout, including pages for Welcome, Admissions, Academics, Contact, and a NotFound page. The project uses modern UI libraries for styling and interactivity.

---

## 📌 Prerequisites

Ensure you have the following installed before running the project:

- Node.js (LTS version recommended) – [Download here](https://nodejs.org/)
- npm (comes with Node.js) or yarn for package management
- Git for version control – [Download here](https://git-scm.com/)

---

## 🚀 Installation

1. Clone the repository
   
   git clone https://github.com/your-repo-url.git
   cd your-project-folder
   

2. Install dependencies
   
   npm install
   
   or if using yarn:
   
   yarn install
   

---

## 📦 Dependencies

The project uses the following key dependencies:

| Package              | Description |
|----------------------|------------|
| react             | JavaScript library for building UI components |
| react-router-dom  | Enables navigation between different pages |
| @shadcn/ui        | Pre-styled UI components |
| lucide-react      | Icon set for UI elements |
| tailwindcss       | Utility-first CSS framework for styling |
| react-icons       | Collection of popular icons (e.g., social media) |

### 🔹 Install all dependencies manually (if needed):

npm install react react-router-dom @shadcn/ui lucide-react tailwindcss react-icons

or with yarn:

yarn add react react-router-dom @shadcn/ui lucide-react tailwindcss react-icons


---

## 🎨 Tailwind CSS Setup

1. Initialize Tailwind:
   
   npx tailwindcss init -p
   
2. Configure `tailwind.config.js`:
   
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   
3. Add Tailwind to `index.css`:
   
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   

---

## 🏃 Running the Project

To start the development server:

npm start

or

yarn start


The website should now be accessible at http://localhost:3000.

---

## 🛠 Features

- Modular Component Design: Components for Student Portal, Admissions, Academics, Contact, Footer, etc.
- Styled with Tailwind CSS: Responsive and modern UI
- Navigation with React Router: Ensures smooth page transitions
- 404 Page Handling: Unimplemented pages lead to the NotFound page

---

## 🎯 Future Improvements

- Implement actual links for social media and quick navigation.
- Add more pages like School Events, Staff Directory, and Parent Portal.
- Improve accessibility and mobile responsiveness.

---

🚀 Happy Coding!
