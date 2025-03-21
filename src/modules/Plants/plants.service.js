// src/modules/Plants/plants.service.js
import Plant from './plants.model.js'; // Cambiado a import

async function createPlant(data) {
    const existingPlant = await Plant.findOne({ user: data.user });
    if (existingPlant) {
        throw new Error('Ya existe una planta para este usuario.');
    }
    const newPlant = new Plant(data);
    return await newPlant.save();
}

async function updatePlant(data) {
    const updatedPlant = await Plant.findOneAndUpdate({}, data, { new: true });
    if (!updatedPlant) {
        throw new Error('No se encontró la planta para actualizar.');
    }
    return updatedPlant;
}

async function getPlant() {
    const plant = await Plant.findOne(); // Obtiene la única planta
    if (!plant) {
        throw new Error('No se encontró la planta.');
    }
    return plant;
}

async function deletePlant() {
    const deletedPlant = await Plant.findOneAndDelete(); // Elimina la única planta
    if (!deletedPlant) {
        throw new Error('No se encontró la planta para eliminar.');
    }
    return deletedPlant; // Retorna la planta eliminada
}

export default {
    createPlant,
    updatePlant,
    getPlant, // Añadir la función para obtener la planta
    deletePlant, // Añadir la función para eliminar la planta
};
// ... código existente ...