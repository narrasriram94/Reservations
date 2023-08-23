import React, { useEffect, useState } from 'react';
import { getReservation } from './ReservationService';

const ReservationDetail = ({ id }) => {
    const [reservation, setReservation] = useState(null);

    useEffect(() => {
        getReservation(id).subscribe(
            response => {
                setReservation(response.data);
            },
            error => {
                console.error("Error fetching reservation:", error);
            }
        );
    }, [id]);

    return (
        <div>
            {/* Render reservation details */}
            {reservation && (
                <div>
                    {reservation.firstName} {reservation.lastName}
                    {/* Other details as per your GUI design */}
                </div>
            )}
        </div>
    );
}
