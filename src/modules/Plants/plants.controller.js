// src/modules/Plants/plants.controller.js
import plantsService from './plants.service.js';

async function createPlant(req, res) {
    try {
        const plantData = req.body;
        const newPlant = await plantsService.createPlant(plantData);
        return res.status(201).json(newPlant);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function updatePlant(req, res) {
    try {
        const updatedData = req.body; // Obtener los datos actualizados del cuerpo de la solicitud
        const updatedPlant = await plantsService.updatePlant(updatedData);
        return res.status(200).json(updatedPlant);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function getPlant(req, res) {
    try {
        const plant = await plantsService.getPlant();
        return res.status(200).json(plant);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

async function deletePlant(req, res) {
    try {
        const deletedPlant = await plantsService.deletePlant();
        return res.status(200).json({ message: 'Planta eliminada exitosamente.', plant: deletedPlant });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

export default {
    createPlant,
    updatePlant, // Mantener el controlador de actualización
    getPlant, // Añadir el controlador para obtener la planta
    deletePlant, // Añadir el controlador para eliminar la planta
};
// ... código existente ...