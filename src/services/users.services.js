import { QueryTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { models, sequelize } from '../database/models/Relaciones.js';

const { Users, Passwords } = models;

export const getUsers = async () => {
    const query = 'SELECT * FROM users';
    try {
        const users = await sequelize.query(
            query,
            { type: QueryTypes.SELECT }
        );
        if (users.length === 0) {
            return null;
        }
        return users;  
    } catch (error) {
        console.error('Error obteniendo usuarios:', error);
        throw error;
    }
}

export const getUserById = async (id) => {
    const query = `SELECT * 
                        FROM users 
                        WHERE id = :id
                        LIMIT 1`;
    try {
        const user = await sequelize.query(
            query,
            { 
                replacements: { id },
                type: QueryTypes.SELECT
            }
        );
        if (user.length === 0) { 
            return null; 
        } else {
            return user[0];  
        }
    } catch (error) {
        console.error('Error obteniendo usuario:', error);
        throw error;
    }
}

export const getUserByMail = async (mail) => {
    const query = `SELECT * 
                        FROM users 
                        WHERE userMail = :mail'
                        LIMIT 1`;
    try {
        const user = await sequelize.query(
            query,
            { 
                replacements: { mail },
                type: QueryTypes.SELECT
            }
        );
        if (user.length === 0) { 
            return null; 
        } else {
            return user[0];  
        }
    } catch (error) {
        console.error('Error obteniendo usuario:', error);
        throw error;
    }
}

export const createUser = async (Datos) => {
    const transaction = await sequelize.transaction();
    try {
        if (!Datos.userName || 
            !Datos.userMail || 
            !Datos.userDate || 
            !Datos.userRole || 
            !Datos.password) {
            throw new Error('Faltan campos obligatorios');
        }
    
        const userData = {
            userName: Datos.userName,
            userMail: Datos.userMail,
            userDate: Datos.userDate,
            userRole: Datos.userRole,
        }

        const nuevoUsuario = await Users.create(userData, {transaction});
        
        const hoy = new Date();
        const expiracionUTC = new Date(Date.UTC(
        hoy.getUTCFullYear(),
        hoy.getUTCMonth() + 6,
        hoy.getUTCDate(),
        hoy.getUTCHours(),
        hoy.getUTCMinutes(),
        hoy.getUTCSeconds(),
        hoy.getUTCMilliseconds()
        ));   
        const hashedPassword = await bcrypt.hash(Datos.password, 10);
        const dataToSave = {
            userId: nuevoUsuario.id,
            password: hashedPassword,
            stateId: 1,
            expirationDate: expiracionUTC,
            resetToken: null
        }
        await Passwords.create(dataToSave, { transaction });
        await transaction.commit();    
        return {
            success: true,
            message: 'Usuario creado correctamente',
            data: nuevoUsuario.get({ plain: true })
        };
    } catch (error) {
        await transaction.rollback();
        console.error('Error creando usuario:', error);
        throw new Error('Error al crear el usuario');
    }
}

export const Login = async (email, password) => {
    try {
        if (!email || !password) {
        throw new Error('Faltan campos obligatorios');
        }
        const query = `SELECT u.id, u.userName, u.userMail, u.userDate, u.userRole, 
                              ur.name as rol, up.password 
                            FROM users u 
                            JOIN userpasswords up on u.id = up.userId
                            JOIN userroles ur on u.userRole = ur.id
                            WHERE u.userMail = :mail`;
        const loggedUser = await sequelize.query(
            query,
            {
                replacements: { mail: email },
                type: QueryTypes.SELECT
            }
        );
        if (loggedUser.length === 0) {
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, loggedUser[0].password);
        if (!isPasswordValid) {
            return null;
        }
        const returnedValue = {
            userId: loggedUser[0].id,
            userName: loggedUser[0].userName,
            userMail: loggedUser[0].userMail,
            userRoleId: loggedUser[0].userRole,
            userRoleName: loggedUser[0].rol
        }; 
        return returnedValue;
    }  catch (error) {
        console.error('Error obteniendo usuario:', error);
        throw error;
    }
}