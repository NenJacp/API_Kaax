import Temperatura from './Temperature.model.js';

// Función para crear o actualizar la temperatura
export const crearOActualizarTemperatura = async (req, res) => {
    console.log("Entrando a crearOActualizarTemperatura"); // Log para verificar si se está entrando a la ruta
    
    const { tempPromedio, tempActual } = req.body;

    if (tempPromedio === undefined || tempActual === undefined) {
        return res.status(400).json({ message: 'Faltan datos' });
    }

    try {
        // Busca si ya existe un registro
        let temperatura = await Temperatura.findOne();

        if (temperatura) {
            // Actualiza el registro existente
            temperatura.tempPromedio = tempPromedio;
            temperatura.tempActual = tempActual;
            await temperatura.save();
        } else {
            // Crea un nuevo registro
            temperatura = new Temperatura({ tempPromedio, tempActual });
            await temperatura.save();
        }

        return res.status(200).json({ message: 'Temperatura guardada/actualizada', temperatura });
    } catch (error) {
        console.error("Error al guardar/actualizar la temperatura:", error.message);
        return res.status(500).json({ message: 'Error al guardar/actualizar la temperatura' });
    }
};

// Función para obtener la temperatura actual y calcular la diferencia
export const obtenerTemperaturaActual = async (req, res) => {
    try {
        const temperatura = await Temperatura.findOne().sort({ createdAt: -1 }); // Busca el último registro

        if (temperatura) {
            const { tempPromedio, tempActual } = temperatura;

            // Calcular la diferencia porcentual
            const diferencia = ((tempActual - tempPromedio) / tempPromedio) * 100;

            return res.json({
                diferencia_porcentual: parseFloat(diferencia.toFixed(2)) // Redondear a 2 decimales y pasar a número
            });
        } else {
            return res.status(404).json({ message: 'No se encontró la temperatura actual' });
        }
    } catch (error) {
        console.error("Error al obtener la temperatura actual:", error);
        return res.status(500).json({ message: 'Error al obtener la temperatura actual' });
    }
};