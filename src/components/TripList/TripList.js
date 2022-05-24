import { useState, useEffect, useCallback } from 'react'
import './tripListStyles.css'

export default function TripList() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url)
    const trips = await response.json()
    setTrips(trips)
  }, [url])

  useEffect(() => {
    console.log('useEffect function ran')
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => setTrips(json))
  // }, [url])
    fetchTrips()
  }, [fetchTrips])

  return (
    <div className='trip-list' >
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=canada')}>
          Canadian Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>

    </div>
  )
}
