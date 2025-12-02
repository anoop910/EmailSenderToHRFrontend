import { getTemplateById, getTemplates, saveTemplate } from "../api/templatesApi";

export const saveTemplateService = async (payload) =>{
    try {
        const response = await saveTemplate(payload);
        console.log("save the data");
        
        return response.data;
    } catch (error) {
        console.error("template save some error : ", error);
        throw error;
    }
}

export const getTemplatesService = async () => {
    try {
        const response = await getTemplates();
        return response.data;
    } catch (error) {
        console.error("get templates some error : ", error);
        throw error;
    }
}

export const getTemplateByIdService = async (id) => {
    try {
        const response = await getTemplateById(id);
        return response.data;
    } catch (error) {
        console.error("get template by id some error : ", error);
        throw error;
    }
}