/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-image":
          "url(https://images.unsplash.com/photo-1599651317690-b0283c307261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=811&q=80)",
        "contact-image":
          "url(https://images.unsplash.com/photo-1560938269-8933cdbbbd27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
      },
      colors: {
        "primary-green": "#51cc06",
        "secundary-green": "#28c9aa",
        "primary-blue": "#84e4ec",
      },
    },
  },
  plugins: [],
};
