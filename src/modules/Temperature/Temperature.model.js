import mongoose from 'mongoose';

const temperaturaSchema = new mongoose.Schema({
    tempPromedio: {
        type: Number,
        required: true,
    },
    tempActual: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Temperatura = mongoose.model('Temperatura', temperaturaSchema);

export default Temperatura;
