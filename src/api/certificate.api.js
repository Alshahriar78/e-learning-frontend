import API from "./axios";

export const getCertificatesApi =(courseId) =>
  API.get(`/api/v1/courses/${courseId}/structure`,{
    withCredentials:true
  });