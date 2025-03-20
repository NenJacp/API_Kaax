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
            const result = await _login(email, password);
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }
}

export default new UserController();
