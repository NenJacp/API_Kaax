import { register as _register, login as _login } from './users.service.js';

class UserController {
    async register(req, res) {
        try {
            const user = await _register(req.body);
            res.status(201).json({
                success: true,
                data: user
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            console.log(`Intentando loguear a ${email} con contraseña: ${password}`); // Añadido para mostrar el intento de login con contraseña
            const result = await _login(email, password);
            console.log(`Login exitoso para ${email}`); // Añadido para mostrar el éxito del login
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            console.error(`Error al loguear: ${error.message}`); // Añadido para mostrar el error del login
            res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default new UserController();
