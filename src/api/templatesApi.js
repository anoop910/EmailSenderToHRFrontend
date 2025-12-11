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

export const deleteTemplate = async (id) => {
    return axios.delete(`/template/delete${id}`);
}

export const editTemplate = async (id, data) => {
    return axios.put(`/template/edit${id}`, data);
}   