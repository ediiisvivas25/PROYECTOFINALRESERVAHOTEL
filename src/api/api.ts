import axios from 'axios';
import { Reserva } from '../types/Reserva';

const API_BASE = 'http://localhost:3001';

export const getReservas = () => axios.get<Reserva[]>(`${API_BASE}/reservas`);
export const postReserva = (reserva: Reserva) => axios.post<Reserva>(`${API_BASE}/reservas`, reserva);

export const getHabitaciones = () =>
  axios.get<{ id: number; numero: string; tipo: string }[]>(`${API_BASE}/habitaciones`);

export const getHorarios = () =>
  axios.get<{ id: number; rango: string }[]>(`${API_BASE}/horarios`);
