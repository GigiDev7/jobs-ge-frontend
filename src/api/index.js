import axios from "axios";

const url = "https://jobs-gi.onrender.com";

export const get_jobs = () => axios.get(`${url}/api/jobs`);
export const get_job = (jobId) => axios.get(`${url}/api/jobs/${jobId}`);

export const get_by_company = (companyName) =>
  axios.get(`${url}/api/jobs/company/${companyName}`);

export const get_by_category = (category) =>
  axios.get(`${url}/api/jobs?category=${category}`);

export const get_by_query = (query) => axios.get(`${url}/api/jobs?q=${query}`);

export const login_post = (formData) =>
  axios.post(`${url}/api/login`, formData);

export const signup_post = (formData) =>
  axios.post(`${url}/api/signup`, formData);

export const get_my_jobs = (token) =>
  axios.get(`${url}/api/jobs/myjobs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const post_job = (token, jobData) =>
  axios.post(`${url}/api/jobs`, jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const update_job = (token, jobId, jobData) =>
  axios.patch(`${url}/api/jobs/${jobId}`, jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const delete_job = (token, jobId) =>
  axios.delete(`${url}/api/jobs/${jobId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
