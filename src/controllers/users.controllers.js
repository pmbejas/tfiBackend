import { UserService } from '../services/services.index.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    return res.status(200).json({
      success: true,
      data: users ?? [],
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno al obtener usuarios',
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        success: false,
        message: 'El parámetro "id" debe ser un entero positivo',
      });
    }

    const user = await UserService.getUserById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno al obtener el usuario',
    });
  }
};

export const getUserByMail = async (req, res) => {
  try {
    const email = String(req.body.email).trim();

    const user = await UserService.getUserByMail(email);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno al obtener el usuario por email',
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const datosUsuario = req.body;
    const required = ['userName', 'userMail', 'userDate', 'userRole', 'password'];
    const missing = required.filter((campo) => !datosUsuario?.[campo]);
    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Faltan campos obligatorios: ${missing.join(', ')}`,
      });
    }

    const resultado = await UserService.createUser(datosUsuario);
    return res.status(201).json(resultado);
  } catch (error) {
    console.error('Error:', error);
    return res.status(400).json({
      success: false,
      message: error.message || 'Error al crear el usuario',
    });
  }
};

export const Login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos obligatorios: email y password',
      });
    } 
    const email = String(req.body.email).trim();
    const password = String(req.body.password).trim();
    
    const user = await UserService.Login(email, password);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Login exitoso',
      data: user,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno al realizar Login',
      error: error.message
    });
  }
};