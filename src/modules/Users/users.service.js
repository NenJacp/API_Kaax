import User from './users.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserService {
    async register(userData) {
        try {
            // Hash password
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            
            // Create new user with hashed password
            const user = new User({
                ...userData,
                password: hashedPassword
            });

            // Save user
            await user.save();
            
            // Remove password from response
            const userResponse = user.toObject();
            delete userResponse.password;
            
            return userResponse;
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        console.log(email, password);
        try {
            // Find user
            const user = await User.findOne({ email });
            if (!user) {
                console.error('Error: User no encontrado'); // Añadido para mostrar el error de usuario no encontrado
                throw new Error('User no encontrado');
            }

            // Verify password
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                console.error('Error: Contraseña invalida'); // Añadido para mostrar el error de contraseña invalida
                throw new Error('Contraseña invalida');
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            // Remove password from response
            const userResponse = user.toObject();
            delete userResponse.password;

            return {
                user: userResponse,
                token
            };
        } catch (error) {
            console.error(`Error al loguear: ${error.message}`); // Añadido para mostrar el error del login
            throw error;
        }
    }
}

const userService = new UserService();
export const { register, login } = userService;
