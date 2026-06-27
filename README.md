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

Whenever the state changes, React automatically re-renders the component to update the UI.

First, import the `useState` hook:

```jsx
import { useState } from "react";
```

Inside your component, create a state variable:

```jsx
const [searchQuery, setSearchQuery] = useState("");
```

- `searchQuery` → The current state value.
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