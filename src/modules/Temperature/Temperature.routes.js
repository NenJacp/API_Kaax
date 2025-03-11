import express from 'express';
import { crearOActualizarTemperatura, obtenerTemperaturaActual } from './Temperature.controller.js';

const router = express.Router();

// Endpoint para recibir temperaturas
router.post('/temperatura', crearOActualizarTemperatura);

// Endpoint para obtener la temperatura actual
router.get('/temperatura', obtenerTemperaturaActual);

export default router;