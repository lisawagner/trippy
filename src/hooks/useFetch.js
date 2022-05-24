import { useState, useEffect, useRef } from "react"

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  // use useRef to wrap an object/array argument
  // which is a useEffect dependency 
  const options = useRef(_options).current

  useEffect(() => {
    console.log("These are the options " + options);
    const controller = new AbortController()
    // Async works here because the function is created inside useEffect
    //   and doesn't need useCallback.
    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, { signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const json = await res.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    fetchData()

    // clean up function
    return () => {
      controller.abort()
    }
    
  }, [url, options])

  return { data, isPending, error  }
}