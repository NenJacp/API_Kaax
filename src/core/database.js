import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("## --Conexion Exitosa-- ##")

    } catch (error) {
        console.error('## --Error de conexión-- w##', error.message);
        process.exit(1);
    }
}

export default connect;