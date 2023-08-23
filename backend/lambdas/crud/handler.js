const mysql = require('mysql2/promise');

const connectionConfig = {
    host: 'database-1.cse6xdsjd4o4.ca-central-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Qpmz0921',
    database: 'database-1'
};

// CREATE operation
module.exports.create = async (event) => {
    const reservationData = JSON.parse(event.body);
    
    let connection;
    try {
        connection = await mysql.createConnection(connectionConfig);
        const [rows] = await connection.execute('INSERT INTO reservations SET ?', [reservationData]);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Successfully created!', id: rows.insertId }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Database error', error: error.message }),
        };
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// READ operation
module.exports.read = async (event) => {
    const { id } = event.pathParameters;

    let connection;
    try {
        connection = await mysql.createConnection(connectionConfig);
        const [rows] = await connection.execute('SELECT * FROM reservations WHERE id = ?', [id]);

        return {
            statusCode: 200,
            body: JSON.stringify(rows[0]),  // Assuming id is a primary key and unique
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Database error', error: error.message }),
        };
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// UPDATE operation
module.exports.update = async (event) => {
    const { id } = event.pathParameters;
    const updatedData = JSON.parse(event.body);
    
    let connection;
    try {
        connection = await mysql.createConnection(connectionConfig);
        await connection.execute('UPDATE reservations SET ? WHERE id = ?', [updatedData, id]);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Successfully updated!' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Database error', error: error.message }),
        };
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// DELETE operation
module.exports.delete = async (event) => {
    const { id } = event.pathParameters;
    
    let connection;
    try {
        connection = await mysql.createConnection(connectionConfig);
        await connection.execute('DELETE FROM reservations WHERE id = ?', [id]);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Successfully deleted!' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Database error', error: error.message }),
        };
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};
