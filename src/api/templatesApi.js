import axios from "./axiosInstance";

export const saveTemplate = async (data) => {
    return axios.post("/template/save", data);
};


export const getTemplates = async () => {
    return axios.get("/template/all");
}

export const getTemplateById = async (id) => {
    return axios.get(`/template/code${id}`);
}