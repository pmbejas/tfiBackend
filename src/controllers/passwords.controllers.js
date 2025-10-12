import { PasswordService } from "../services/services.index.js";

export const getPasswordByUserId = async (req, res, next) => {
    const { userId } = req.params;
    try {
        const passwordData = await PasswordService.getPasswordByUserId(userId);
        if (!passwordData) {
            return res.status(404).json({ message: 'Password not found for the given userId' });
        }
        res.json(passwordData);
    } catch (error) {
        next(error);
    }   
};