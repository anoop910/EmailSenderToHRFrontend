import { sendEmailApi } from "../api/emailApi";

export const emailService = async (payload) => {
    try {
        const response = await sendEmailApi(payload);
        return response.data;
    } catch (error) {
        console.error("email send some error : ", error);
        throw error;
        
        
    }
}