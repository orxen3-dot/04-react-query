# 🎬 Movie Search App

A movie search application built with **React, TypeScript, and TanStack Query**. The application allows users to search for movies using The Movie Database (TMDB) API, browse search results, navigate through pages, and view detailed movie information.

🔗 **Live Demo:** [04-react-query](https://04-react-query-ebon-pi-45.vercel.app/)

🔗 **Repository:** [GitHub](https://github.com/orxen3-dot/04-react-query)

## ✨ Features

- **Movie Search** – Search for movies by title using the TMDB API.
- **Server State Management** – Fetch and manage server data with TanStack Query.
- **Pagination** – Navigate through movie search results.
- **Movie Details Modal** – View movie information, including overview, release date, rating, and backdrop image.
- **Loading States** – Display loading indicators while fetching data.
- **Error Handling** – Provide feedback when API requests fail.
- **Empty Search Results** – Notify users when no movies match their search.
- **Toast Notifications** – Display interactive notifications using React Hot Toast.
- **React Query Devtools** – Inspect queries and monitor server state during development.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Building the user interface |
| TypeScript | Static typing |
| TanStack Query v5 | Server state management and data fetching |
| Axios | HTTP requests |
| React Paginate | Pagination |
| React Hot Toast | Toast notifications |
| CSS Modules | Component-level styling |
| Vite | Development environment and build tool |
| TMDB API | Movie data and images |

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- TMDB API access token

### Installation

1. Clone the repository:

```bash
git clone https://github.com/orxen3-dot/04-react-query.git
```

2. Navigate to the project directory:

```bash
cd 04-react-query
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory:

```env
VITE_TMDB_TOKEN=your_tmdb_api_token
```

5. Start the development server:

```bash
npm run dev
```

## 🔑 API Configuration

This project uses the [TMDB API](https://developer.themoviedb.org/docs).

To run the application, you need a TMDB API Read Access Token.

Add your token to the `.env` file as `VITE_TMDB_TOKEN`.

**Important:** Never commit your actual API token to a public repository. Keep your `.env` file in `.gitignore`.

## 📁 Project Structure

```text
src/
├── components/
│   ├── App/
│   ├── SearchBar/
│   ├── MovieGrid/
│   ├── MovieModal/
│   ├── Loader/
│   └── ErrorMessage/
│
├── services/
│   └── movieService.ts
│
├── types/
│   └── movie.ts
│
└── main.tsx
```

## 🧠 Key Concepts Practiced

- React component architecture
- TypeScript interfaces and type definitions
- TanStack Query and server state management
- Query keys and automatic cache management
- Asynchronous JavaScript (`async/await`)
- REST API integration
- HTTP requests with Axios
- Pagination and dynamic data fetching
- React Hooks (`useState`, `useEffect`)
- Conditional rendering
- React Portals
- Environment variables
- Error and loading state management

## 👨‍💻 Author

**Hryhorii Shalashnyi**

Fullstack Developer

- GitHub: [@orxen3-dot](https://github.com/orxen3-dot)

---

*This project was developed as part of my Fullstack Development learning journey at GoIT.*

## 📄 Credits

Movie data and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

This project is not endorsed or certified by TMDB.
