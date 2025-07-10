# 🧠 Pokémon Memory Game — Built with React + TypeScript

![React](https://img.shields.io/badge/React-18.x-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-yellow?style=flat&logo=vite)
![License](https://img.shields.io/github/license/sijan2006/memory-game-react)

> A responsive, dynamic memory game powered by PokéAPI and styled with sleek glassmorphism. Click Pokémon cards without repeating — but if you do, your score resets!

---

## 🎮 Demo

> Live demo coming soon!

---

## 🧩 Features

- ⚛️ **React + TypeScript**: Clean codebase built with functional components and React Hooks (`useState`, `useEffect`)
- 🔁 **Dynamic Card Shuffling**: Enhances difficulty after each click
- 📦 **Live Data from PokéAPI**: Fetches real-time Pokémon (ID, name, sprite)
- 🎯 **Game Logic**:
  - ✅ +1 Score for unique selection
  - ❌ Score reset if card is clicked twice
  - 🏆 High score tracked throughout session
- 💅 **Styling**:
  - Dark-mode UI with custom Pokémon theme
  - Glassmorphism cards: blurred, semi-transparent, glowing edges
  - Hover animations for better UX
- 📱 **Responsive Design**: Plays well on all screen sizes

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/sijan2006/memory-game-react.git
cd memory-game-react/memory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally (Vite)

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🔍 How It Works

- On page load:

  - 12 Pokémon are fetched using `Promise.all()` from PokéAPI

- Each card displays a Pokémon image and name
- When a card is clicked:

  - If already clicked → reset current score, clear history
  - If new → increase score, update high score if necessary

- Cards are reshuffled after every click using Fisher-Yates algorithm
- Game state and logic handled using local state (`useState`)

---

## ⚙️ Tech Stack

| Layer       | Tools Used                            |
| ----------- | ------------------------------------- |
| Frontend    | React (via Vite), TypeScript          |
| Styling     | Pure CSS (glassmorphism, transitions) |
| API         | [PokéAPI](https://pokeapi.co/)        |
| Game Logic  | React Hooks, local state management   |
| Build Tools | Vite (super-fast dev + build)         |

---

## 📁 Project Structure

```
memory/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── vite.config.ts
└── ...
```

---

## 💡 What Makes It Special?

- 🔄 **No hardcoded Pokémon** — all data fetched in real-time
- 🧠 **Memory-enhancing gameplay** with shuffle logic
- 🎨 **Elegant theming** — dark mode with modern glassmorphism
- 🚀 **Lightweight and fast** — built with Vite + TypeScript
- 📚 **Perfect learning project** — ideal for JS/React practice

---

## 📦 Future Improvements

- Add difficulty levels (Easy, Medium, Hard)
- Use localStorage for high score persistence
- Add timer and leaderboard
- Improve mobile layout further
- Deploy on GitHub Pages or Netlify

---

## 🙌 Acknowledgements

- [PokéAPI](https://pokeapi.co/) — for free Pokémon data
- [Vite](https://vitejs.dev/) — blazing fast frontend tooling
- [Glassmorphism CSS Generator](https://hype4.academy/tools/glassmorphism-generator) — UI inspiration

---

## 📝 License

MIT © [Sijan Sapkota](https://github.com/sijan2006)

```

```
