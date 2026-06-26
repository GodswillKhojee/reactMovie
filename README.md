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