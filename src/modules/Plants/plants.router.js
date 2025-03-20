import express from 'express';
import plantController from './plants.controller.js';

const router = express.Router();

// Rutas para la aplicación (App)
router.post('/plants', plantController.create.bind(plantController)); // Crear nueva planta
router.get('/plants', plantController.getPlants.bind(plantController)); // Obtener todas las plantas
router.patch('/plants/update', plantController.updatePlantData.bind(plantController)); // Actualizar datos de la planta
router.patch('/plants/status', plantController.updatePlantStatus.bind(plantController)); // Actualizar estado de la planta
router.delete('/plants', plantController.deletePlant.bind(plantController)); // Eliminar planta

// Rutas para la maceta
router.get('/maceta/status', plantController.getPlantStatus.bind(plantController)); // Obtener estado de la planta (isRaining, water, needsWater)
router.patch('/maceta/update', plantController.updateMacetaData.bind(plantController)); // Enviar datos de la planta

export default router;
