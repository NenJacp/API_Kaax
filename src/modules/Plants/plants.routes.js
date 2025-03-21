import express from 'express';
const router = express.Router();
import plantsController from './plants.controller.js';

// Nuevos endpoints para el APP
router.post('/app/plant', plantsController.createPlant); // Endpoint para crear una planta
router.put('/app/plant', plantsController.updatePlant); // Endpoint para actualizar la planta
router.get('/app/plant', plantsController.getPlant); // Endpoint para obtener la planta
router.delete('/app/plant', plantsController.deletePlant); // Endpoint para eliminar la planta

// Nuevos endpoints para el ESP
router.get('/esp/plant', plantsController.getEsp); // Endpoint para obtener datos del ESP
router.put('/esp/plant', plantsController.updateEsp); // Endpoint para actualizar datos del ESP

export default router;
