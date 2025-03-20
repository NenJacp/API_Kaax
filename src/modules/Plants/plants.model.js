import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        description: 'Nombre de la planta'
    },

    humidity: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 100,
        description: 'Humedad de la planta'
    },
    ambientHumidity: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 100,
        description: 'Humedad ambiental'
    },
    ambientTemperature: {
        type: Number,
        required: false,
        default: 0,
        min: -50,
        max: 50,
        description: 'Temperatura ambiental'
    },
    isRaining: {
        type: Boolean,
        default: false,
        description: 'Indica si está lloviendo'
    },
    lastRainDate: {
        type: Date,
        description: 'Fecha de la última lluvia'
    },
    water: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
        description: 'Nivel de agua'
    },
    needsWater: {
        type: Boolean,
        default: false,
        description: 'Indica si la planta necesita agua'
    },
    lastWaterDate: {
        type: Date,
        description: 'Fecha de la última vez que se regó la planta'
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    //     description: 'Referencia al usuario dueño de la planta'
    // }
}, {
    timestamps: true
});

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;
