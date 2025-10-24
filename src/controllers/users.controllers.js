import { UserService } from '../services/services.index.js';
import { generateTokens, signAccessToken } from '../security/authToken.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    return res.status(users.responseCode).json({
      success: users.success,
      message: users.message,
      data: users.data ?? [],
    });
  } catch (error) {
    console.error('Error en getusers:', error);
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
        message: 'El parámetro "id" no válido.',
      });
    }

    const user = await UserService.getUserById(id);
    
    return res.status(user.responseCode).json({
      success: user.success,
      message: user.message,
      data: user.data?? null,
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

    return res.status(user.responseCode).json({
      success: user.success,
      message: user.message,
      data: user.data?? null,
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

export const updateUser = async (req, res) => {
    console.log('updateUser controller called');
};

export const updatePassword = async (req, res) => {
    console.log('updateUser controller called');
};

export const deleteUser = async (req, res) => {
    console.log('deleteUser controller called');
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
    
    const data = await UserService.Login(email, password);
    
    let accessToken = null;
    if (data.success) {
      const { accessToken: token, refreshToken, jti } = generateTokens(data);
      accessToken = token;
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true
      });
    }
    
    return res.status(data.responseCode).json({
      success: data.success,
      message: data.message,
      accessToken: accessToken? accessToken : undefined,
      data: data.user? data.user : undefined,
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

