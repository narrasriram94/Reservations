import React, { useState } from 'react';
import { getReservation } from './ReservationService'; // Assuming the service is in the same directory

const SearchComponent = () => {
    const [searchCriteria, setSearchCriteria] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Assuming the getReservation function can take search criteria
        getReservation(searchCriteria).subscribe(
            response => {
                setResults(response.data);
            },
            error => {
                console.error("Error fetching reservations:", error);
            }
        );
    };

    return (
        <div>
            <input 
                value={searchCriteria}
                onChange={(e) => setSearchCriteria(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            
            {/* Display results */}
            {results.map(reservation => (
                <div key={reservation.id}>
                    {reservation.firstName} {reservation.lastName}
                    {/* Other fields as needed */}
                </div>
            ))}
        </div>
    );
}
