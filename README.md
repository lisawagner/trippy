# Trippy

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Fetching Data + useEffect

For Data, I added JSON Server to allow us to replicate a database using a local JSON file. It wraps that JSON file with API endpoints which we can then use to Fetch Data and interact with that Data.

### `Why useEffect`

To fetch the data cleanly, we use the `useEffect` hook to prevent an infinite loop of data fetching/updating state. `useEffect` is a hook that allows us to perform *side effects*: data fetching, subscriptions, or manual DOM changes from React components within functional components.

### `Fetching Data with useEffect`

When our component is initially evaluated, `useEffect` will run our function inside of itas the first argument. Then we can perform *side effects*, like data fetching, and then update the state inside useEffect. When the component is re-evaluated, and the function re-runs, useEffect will only run if it's dependencies have changed value.

An empty dependency array at the end of useEffect means the function is only going to run once at the start because it has no dependencies. 

`useEffect` invokes a callback after initial mounting, and on later renderings, if a value inside the dependencies has changed.

### `The Dependency Array`

When dependency values change, useEffect re-runs the function and updates the data. This allows us to have different endpoints for different queries and update them. For example, a button that onClick displays trips in Canada, and another button that displays all USA trips.

### `Dependencies + useCallback`

**Note: For when you need async**

When one of your dependencies is a function that you want to extract and re-use elsewhere. You can also make it async if it is not inside of useEffect.

`useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. This helps prevent unnecessary renders.

### `Custom Fetch Hook`

Here we extract and create a custom hook that we can use anywhere in our React App to fetch data.

### `Loading State`

Even though it doesn't take much time to call the custom Fetch Hook and map the data to the DOM, it is a good plan to include a "loading" state for slower connections.

### `Error Handling`

We need ways to handle errors and log details on these errors in order to troubleshoot.  Try Catch blocks are great for this.

### `Cleanup Functions`

When we asynchronously try to update state in a component after it's unmounted, we need a cleanup because there can be memory leaks.

### `Aborting Fetch Requests`

In your useEffect you need to abort all async functions and subscriptions to data streams. You use a standard javascript `AbortController()` and pass it into the fetch request.

### `useEffect Suprises`

If an object is a reference type and used in a dependency array like in useEffect, they trigger an infinite loop. So you need to use the `useRef` hook inside the custom hook.
