import Plant from './plants.model.js';

export const createPlant = async (name, type, description) => {
    const plant = new Plant({
        name,
        type,
        description
    });
    await plant.save();
    return plant;
};

export const getPlants = async (userId) => {
    return await Plant.find({ user: userId });
};

export const getPlantStatus = async () => {
    const plant = await Plant.findOne();
    if (!plant) {
        throw new Error('No hay planta registrada en el sistema');
    }
    return {
        isRaining: plant.isRaining,
        needsWater: plant.needsWater,
        water: plant.water
    };
};

export const updatePlantData = async (humidity, ambientHumidity, ambientTemperature) => {
    const plant = await Plant.findOne();
    if (!plant) {
        throw new Error('No hay planta registrada en el sistema');
    }

    // Actualizar los datos de la planta
    plant.humidity = humidity;
    plant.ambientHumidity = ambientHumidity;
    plant.ambientTemperature = ambientTemperature;

    await plant.save();
    return plant; // Devuelve la planta actualizada
};

export const updatePlantStatus = async (isRaining, needsWater, water) => {
    const plant = await Plant.findOne();
    if (!plant) {
        throw new Error('No hay planta registrada en el sistema');
    }

    // Actualizar el estado de la planta
    plant.isRaining = isRaining;
    plant.needsWater = needsWater;
    plant.water = water;

    await plant.save();
    return plant; // Devuelve la planta actualizada
};

export const deletePlant = async (id) => {
    const plant = await Plant.findByIdAndDelete(id);
    if (!plant) {
        throw new Error('Planta no encontrada');
    }
    return plant; // Devuelve la planta eliminada
};

export const updateMacetaData = async (isRaining, needsWater, water, humidity, ambientHumidity, ambientTemperature) => {
    const plant = await Plant.findOne();
    if (!plant) {
        throw new Error('No hay planta registrada en el sistema');
    }

    // Actualizar el estado de la planta
    plant.isRaining = isRaining;
    plant.needsWater = needsWater;
    plant.water = water;
    plant.humidity = humidity;
    plant.ambientHumidity = ambientHumidity;
    plant.ambientTemperature = ambientTemperature;

    // Actualizar las fechas de última lluvia y riego
    if (needsWater) {
        plant.lastWaterDate = new Date();
    }
    if (isRaining) {
        plant.lastRainDate = new Date();
    }

    await plant.save();
    return plant; // Devuelve la planta actualizada
};
