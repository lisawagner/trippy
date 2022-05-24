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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `Custom Fetch Hook`

This section has moved here: 

### `Loading State`

This section has moved here:

### `Error Handling`

This section has moved here:

### `Cleanup Functions`

This section has moved here: 

### `Halting Fetch Requests`

This section has moved here: 

### `useEffect Suprises`

This section has moved here: 
