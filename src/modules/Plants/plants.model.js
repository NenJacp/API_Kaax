import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Obligatorio
        trim: true,
        description: 'Nombre de la planta'
    },
    type: {
        type: String,
        required: true, // Obligatorio
        description: 'Tipo de planta'
    },
    description: {
        type: String,
        required: true, // Obligatorio
        description: 'Descripción de la planta'
    },
    soilHumidity: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 100,
        description: 'Humedad del suelo'
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
    shelterActive: {
        type: Boolean,
        default: false,
        description: 'Indica si la carpita está activa'
    },
    shelterActivationDate: {
        type: Date,
        description: 'Fecha de activación de la carpita'
    },
    waterRelayActive: {
        type: Boolean,
        default: false,
        description: 'Indica si el relay de la bomba de agua está activo'
    },
    waterRelayActivationDate: {
        type: Date,
        description: 'Fecha de activación del relay de la bomba de agua'
    },
    water: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
        description: 'Nivel de agua'
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    //     description: 'Referencia al usuario dueño de la planta'
    // }
}, {
    timestamps: true // Obligatorio
});

export default mongoose.model('Plant', plantSchema);
