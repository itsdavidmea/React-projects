# React Todo App

This is a simple Todo application built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).  
It demonstrates core React concepts such as components, props, state management, and conditional rendering.

## Features

- Add new todo items
- Mark todos as completed
- Delete todos
- Filter todos by status (Open, Completed, All)
- Persistent data using localStorage

## Project Structure

```
todo-app/
├── public/           # Static assets
│   └── vite.svg
├── src/              # Source code
│   ├── assets/       # Images and icons
│   │   └── react.svg
│   ├── components/   # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Tabs.jsx
│   │   ├── TodoCard.jsx
│   │   ├── TodoInput.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx       # Main app component
│   ├── fanta.css     # Additional styles
│   ├── index.css     # Global styles
│   └── main.jsx      # App entry point
├── index.html        # HTML template
├── package.json      # Project metadata and dependencies
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

## How It Works

- **App.jsx**: The main component. Manages the todo list state and passes data/functions to child components.
- **main.jsx**: Entry point. Renders the App component into the DOM.
- **Header.jsx**: Displays the app title and todo count.
- **Tabs.jsx**: Lets users filter todos by status (Open, Completed, All).
- **TodoInput.jsx**: Input field for adding new todos.
- **TodoList.jsx**: Renders a list of todos based on the selected tab.
- **TodoCard.jsx**: Displays individual todo items with "Done" and "Delete" buttons.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Customization

- Edit styles in `src/index.css` and `src/fanta.css`.
- Modify components in `src/components/` to add new features or change UI.

## License

This project is for educational purposes.

---

Feel free to explore and modify the code to learn more about React!
