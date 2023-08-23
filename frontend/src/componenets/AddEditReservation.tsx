import React, { useState } from 'react';
import { createReservation, updateReservation } from './ReservationService';

const AddEditReservation = ({ initialData = null }) => {
    const [reservationData, setReservationData] = useState(initialData);

    const handleSubmit = () => {
        if (initialData) {
            // Edit
            updateReservation(initialData.id, reservationData).subscribe(
                response => {
                    console.log("Successfully updated!");
                },
                error => {
                    console.error("Error updating reservation:", error);
                }
            );
        } else {
            // Create
            createReservation(reservationData).subscribe(
                response => {
                    console.log("Successfully created!");
                },
                error => {
                    console.error("Error creating reservation:", error);
                }
            );
        }
    };

    return (
        <div>
            {/* Form elements to capture/modify reservation details */}
            <button onClick={handleSubmit}>
                {initialData ? 'Update' : 'Create'}
            </button>
        </div>
    );
}
