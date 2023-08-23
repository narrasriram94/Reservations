import axios from 'axios';
import { from } from 'rxjs';

const BASE_API_URL = 'API_GATEWAY_URL';  // Once we create the API Gateway Endpoint, Replace with API Gateway URL

export const createReservation = (reservationData) => {
    return from(axios.post(`${BASE_API_URL}/create`, reservationData));
}

export const getReservation = (id) => {
    return from(axios.get(`${BASE_API_URL}/read/${id}`));
}

export const updateReservation = (id, updatedData) => {
    return from(axios.put(`${BASE_API_URL}/update/${id}`, updatedData));
}

export const deleteReservation = (id) => {
    return from(axios.delete(`${BASE_API_URL}/delete/${id}`));
}
