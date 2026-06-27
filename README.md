# React Movie App

This is a beginner React project where I am learning the fundamentals of React. In this project, users can search for movies and mark them as favorites. The favorite movies will be stored and displayed on a separate **Favorites** page.

---

# Components and Props

## Components

A **component** is a reusable piece of UI in React.

Instead of writing the same code multiple times, we create a component once and reuse it wherever needed. For example, a search bar, navigation bar, or movie card can all be created as separate components.

This makes the code:

- More reusable
    
- Easier to read
    
- Easier to maintain
    
- Easier to update, since changes only need to be made in one place
    

For example, if we create a `MovieCard` component, we can display as many movie cards as we want without rewriting the same JSX.

---

## Props

**Props** (short for **Properties**) are used to pass data from a **parent component** to a **child component**.

When a component receives props, React passes them as an object called `props`.

For example:

```jsx
const MovieCard = ({ movie }) => {
    // ...
}
```

Here, `movie` is **destructured** from the `props` object.

It is equivalent to writing:

```jsx
const MovieCard = (props) => {
    const movie = props.movie;
}
```

---

### Parent Component

The parent component sends data to the child.

```jsx
<MovieCard
    movie={{
        title: "joy's film",
        releaseDate: "2026",
        url: "https://via.placeholder.com/300x450"
    }}
/>
```

Here, the prop name is `movie`, and its value is an object containing information about the movie.

---

### Child Component

The child component receives the prop and displays its data.

```jsx
<div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.releaseDate}</p>
</div>
```

The child accesses the values passed by the parent using the `movie` object.

---

## Why use Props?

Props allow the same component to display different data without changing its code.

For example:

```jsx
<MovieCard movie={{ title: "Avengers", releaseDate: "2019" }} />
<MovieCard movie={{ title: "Batman", releaseDate: "2022" }} />
<MovieCard movie={{ title: "Iron Man", releaseDate: "2008" }} />
```

Although the same `MovieCard` component is used three times, each card displays different information because each receives different props.

This helps reduce duplicate code and makes components reusable throughout the application.

# `map()`

`map()` is a built-in JavaScript array method that **iterates through each element of an array and returns a new array**.

In React, `map()` is commonly used to render a list of components from an array of data.

### Example

```jsx
const movies = [
    { id: 1, title: "John Wick", releaseDate: "2020" },
    { id: 2, title: "Batman", releaseDate: "2022" },
    { id: 3, title: "Iron Man", releaseDate: "2008" },
];
```

Here, we have an array of movie objects. We want to display the information for each movie on the webpage.

To do this, we use `map()` to iterate over the array and render a `MovieCard` component for every movie.

```jsx
{movies.map((movie) => (
    <MovieCard movie={movie} key={movie.id} />
))}
```

### How it works

During each iteration:

* `movie` represents the current movie object in the array.
* The current `movie` object is passed to the `MovieCard` component as a prop.
* `key={movie.id}` gives each rendered component a unique identifier, helping React efficiently update and re-render the list.

The `MovieCard` component then receives the `movie` prop and displays its information.

```jsx
const MovieCard = ({ movie }) => {
    return (
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
    );
};
```

Without `map()`, we would have to manually create a `MovieCard` for every movie, which would result in repetitive code. Using `map()` makes the code shorter, cleaner, and scalable, allowing us to render any number of movies dynamically.

# State

State is a special object (or value) in React that stores data that can change over time.

Whenever the state changes, React automatically re-renders the entire component to update the UI.

First, import the `useState` hook:

```jsx
import { useState } from "react";
```

Inside your component, create a state variable:

```jsx
const [searchQuery, setSearchQuery] = useState("");
```

- `searchQuery` → The current state value and stores the date after the re-renders.
- `setSearchQuery` → A function used to update the state.
- `""` → The initial state value.

## Binding the Input

Connect the state to the input field using the `value` and `onChange` props.

```jsx
<input
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
```

- `value={searchQuery}` makes the input a **controlled component**, meaning its value is controlled by React state.
- `onChange` is triggered whenever the user types in the input.
- `e.target.value` contains the current text entered by the user.
- `setSearchQuery(e.target.value)` updates the state with the latest input value.

## Handling Form Submission

Our goal is to display whatever the user types into the input field when the form is submitted.

```jsx
const handleSearch = (e) => {
  e.preventDefault(); // Prevents the form from reloading the page.
  alert(searchQuery);

  // setSearchQuery("");
};
```

### `preventDefault()`

By default, submitting a form refreshes the page, which clears the input and resets the component.

Calling:

```jsx
e.preventDefault();
```

prevents the default form submission behavior, allowing React to handle the submission without reloading the page.

> **Note:** `preventDefault()` prevents the **form submission** (page reload), **not** the input value from reloading.

You can also clear the input after submission by updating the state:

```jsx
setSearchQuery("");
```

This resets the input field because its value is controlled by the `searchQuery` state.

# Page Routing

To navigate between different pages in our React application, we use **React Router**.

## Step 1: Install React Router

Run the following command:

```bash
npm install react-router-dom
```

---

## Step 2: Wrap the App with `BrowserRouter`

In `main.jsx`, wrap the `App` component with `BrowserRouter`.

```jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

`BrowserRouter` enables client-side routing and provides routing functionality to every component inside the application.

---

## Step 3: Create the Navigation Bar

Create a new file named `NavBar.jsx` inside the `components` folder.

Import the `Link` component:

```jsx
import { Link } from "react-router-dom";
```

`NavBar.jsx`

```jsx
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/favorite" className="nav-link">
          Favorite
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
```

### Why use `Link` instead of `<a>`?

`Link` allows navigation between pages **without reloading the browser**, making the application faster and preserving the React state.

The `to` prop specifies the route to navigate to.

```jsx
<Link to="/">Home</Link>
```

---

## Step 4: Configure the Routes

In `App.jsx`, import the required components.

```jsx
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
```

Now define the routes:

```jsx
return (
  <>
    <NavBar />

    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </main>
  </>
);
```

---

## Understanding `Routes` and `Route`

`Routes` is a container that holds all the routes in your application.

Each `Route` maps a URL path to a React component.

```jsx
<Route path="/" element={<Home />} />
```

- `path="/"` → Matches the Home page.
- `element={<Home />}` → Renders the `Home` component when the URL is `/`.

Similarly,

```jsx
<Route path="/favorite" element={<Favorite />} />
```

renders the `Favorite` component when the URL is `/favorite`.

**Note:** React Router performs **client-side routing**, meaning only the displayed component changes when navigating between pages. The browser does **not** perform a full page refresh, resulting in a smoother and faster user experience.

# API Service Documentation

This file is responsible for communicating with **TMDB (The Movie Database) API**. It contains functions that fetch movie data from the server and return it to the React application.

---

## API Key

```javascript
const API_KEY = 'YOUR_API_KEY';
```

* `API_KEY` is the unique key provided by TMDB.
* It authenticates every request sent to the TMDB server.
* Without a valid API key, the API will reject the request.

---

## Base URL

```javascript
const BASE_URL = 'https://api.themoviedb.org/3';
```

* `BASE_URL` stores the common part of every TMDB endpoint.
* Instead of writing the complete URL every time, we store it in one variable.
* This makes the code cleaner and easier to maintain.

Example:

```
https://api.themoviedb.org/3/movie/popular
```

Here,

* `https://api.themoviedb.org/3` → Base URL
* `/movie/popular` → API endpoint

---

# getPopularMovies()

```javascript
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = response.json();
    return data.results;
};
```

### Purpose

Fetches the list of currently popular movies from TMDB.

---

### Step 1

```javascript
const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
```

* Sends an HTTP GET request to the TMDB server.
* `fetch()` contacts the API.
* `await` pauses the function until the server sends a response.

The generated URL looks like:

```
https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY
```

---

### Step 2

```javascript
const data = response.json();
```

* The API returns data in JSON format.
* `response.json()` converts the response into a JavaScript object.

The returned object looks similar to:

```javascript
{
    page: 1,
    results: [
        {
            id: 123,
            title: "Batman",
            poster_path: "...",
            overview: "...",
            vote_average: 8.2
        },
        ...
    ]
}
```

---

### Step 3

```javascript
return data.results;
```

Instead of returning the entire object, we only return the `results` array since that's what the application needs.

---

# searchMovies(query)

```javascript
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = response.json();
    return data.results;
};
```

### Purpose

Searches for movies using the text entered by the user.

The parameter

```javascript
query
```

contains the search text.

Example:

```javascript
searchMovies("Avengers");
```

---

### encodeURIComponent()

```javascript
encodeURIComponent(query)
```

Converts special characters into URL-safe characters.

Example:

```
Spider Man
```

becomes

```
Spider%20Man
```

This prevents errors while sending requests.

---

### Generated URL

If the user searches for

```
Batman
```

the request becomes

```
https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&query=Batman
```

---

# async and await

### async

Marks the function as asynchronous so it can perform operations like API requests without blocking the application.

### await

Pauses execution until the API finishes responding.

Without `await`, the function would continue executing before the data had been received.

---

# export

```javascript
export const getPopularMovies = ...
```

`export` makes the function available to other files.

Example:

```javascript
import { getPopularMovies, searchMovies } from "./api";
```

---

# Flow of Execution

```
React Component
       │
       ▼
Calls getPopularMovies()
       │
       ▼
fetch() sends request
       │
       ▼
TMDB Server
       │
Returns JSON response
       │
       ▼
response.json()
       │
       ▼
Extract data.results
       │
       ▼
Return movies array
       │
       ▼
Display movies on the webpage
```

---

# Important Correction

The `searchMovies()` function currently uses the **wrong endpoint**:

```javascript
/movie/popular
```

The `/movie/popular` endpoint ignores the `query` parameter, so searching will not work.

It should use:

```javascript
/search/movie
```

Correct version:

```javascript
const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
);
```

Also, both functions should use:

```javascript
const data = await response.json();
```

instead of

```javascript
const data = response.json();
```

because `response.json()` also returns a Promise and must be awaited before accessing `data.results`.
