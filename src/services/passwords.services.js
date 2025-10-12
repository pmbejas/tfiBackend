import Passwords from '../database/models/Passwords.js';
import { sequelize } from '../database/config.js';
import { QueryTypes } from 'sequelize';

export const getPasswordByUserId = async (userId) => {
    const query = `SELECT password, stateId, expirationDate, resetToken
                        FROM passwords 
                        WHERE userId = :userId`;
    try {
        const passwordRecovered = await sequelize.query(
            query,
            { 
                replacements: { userId },
                type: QueryTypes.SELECT
            }
        );
        if (passwordRecovered.length === 0) { 
            return null; 
        } else {
            return passwordRecovered[0];  
        }
    } catch (error) {
        console.error('Error obteniendo contraseña:', error);
        throw error;
    }
}


