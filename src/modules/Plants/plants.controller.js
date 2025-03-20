import { createPlant, getPlants, updatePlantData, getPlantStatus, deletePlant, updateMacetaData } from './plants.service.js';

class PlantController {
    async create(req, res) {
        try {
            const { name, type, description } = req.body;
            
            if (!name) {
                return res.status(400).json({
                    success: false,
                    message: 'Nombre es requerido'
                });
            }

            // Verificar si ya existe una planta
            const existingPlant = await getPlants();
            if (existingPlant.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Ya existe una planta registrada'
                });
            }

            const plant = await createPlant(name, type, description);
            
            res.status(201).json({
                success: true,
                data: {
                    name: plant.name,
                    type: plant.type,
                    description: plant.description
                }
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getPlants(req, res) {
        try {
            const plants = await getPlants();
            res.status(200).json({
                success: true,
                data: plants
            }); 
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getPlantStatus(req, res) {
        try {
            const plantStatus = await getPlantStatus();
            res.status(200).json({
                success: true,
                data: plantStatus
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async updatePlantData(req, res) {
        try {
            const { humidity, ambientHumidity, ambientTemperature } = req.body;

            if (humidity === undefined || ambientHumidity === undefined || ambientTemperature === undefined) {
                return res.status(400).json({
                    message: 'La humedad, humedad ambiental y temperatura ambiental son requeridas'
                });
            }

            const result = await updatePlantData(humidity, ambientHumidity, ambientTemperature);
            res.status(200).json(result); 
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async updatePlantStatus(req, res) {
        try {
            const { isRaining, needsWater, water } = req.body;

            if (isRaining === undefined || needsWater === undefined || water === undefined) {
                return res.status(400).json({
                    message: 'isRaining, needsWater y water son requeridos'
                });
            }

            const result = await updatePlantStatus(isRaining, needsWater, water);
            res.status(200).json(result); 
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    async deletePlant(req, res) {
        try {
            const result = await deletePlant();
            res.status(200).json({
                success: true,
                message: 'Planta eliminada con éxito',
                data: result
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async updateMacetaData(req, res) {
        try {
            const { isRaining, needsWater, water, humidity, ambientHumidity, ambientTemperature } = req.body;

            if (isRaining === undefined || needsWater === undefined || water === undefined || humidity === undefined || ambientHumidity === undefined || ambientTemperature === undefined) {
                return res.status(400).json({
                    message: 'isRaining, needsWater, water, humidity, ambientHumidity y ambientTemperature son requeridos'
                });
            }

            const result = await updateMacetaData(isRaining, needsWater, water, humidity, ambientHumidity, ambientTemperature);
            res.status(200).json(result); 
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export default new PlantController();
