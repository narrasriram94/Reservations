import React from 'react';
import SearchComponent, { Reservation } from './components/SearchComponent';

const App: React.FC = () => {
    const reservations: Reservation[] = [
        // Sample data from reservations.json
        // ... 
    ];

    return (
        <div className="App">
            <SearchComponent data={reservations} />
        </div>
    );
};

export default App;
