import axiosInstance from "./axiosInstance";

export const sendEmailApi = async (data) => {
    return axiosInstance.post("/email/send", data);
};