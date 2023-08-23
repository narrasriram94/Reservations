const MOCK_DATA = require('../data/reservations.json');

module.exports.search = async (event) => {
    const { searchTerm } = JSON.parse(event.body);
    
    // Search logic using the mock data
    const results = MOCK_DATA.filter(reservation => 
        reservation.firstName.includes(searchTerm) ||
        reservation.lastName.includes(searchTerm)
    );
    
    return {
        statusCode: 200,
        body: JSON.stringify(results),
    };
};
