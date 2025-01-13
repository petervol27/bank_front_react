import axios from 'axios';

const HOST = 'https://bank-zdpd.onrender.com/';
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  try {
    const response = await axios.post(`${HOST}refresh/`, {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    localStorage.setItem('access_token', newAccessToken);
    return;
  } catch (error) {
    throw error;
  }
};

export const validateToken = async (token) => {
  try {
    const response = await axios.get(`${HOST}users/validate/`);
    if (response.data.valid) {
      return;
    }
  } catch (error) {
    await refreshAccessToken();
  }
};

// Axios instance to control the token
let navigate;
export const setNavigate = (navigateFunc) => {
  navigate = navigateFunc;
  console.log(navigate);
};
const axiosInstance = axios.create({
  baseURL: 'https://bank-zdpd.onrender.com/',
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        await refreshAccessToken();
        const config = error.config;
        config.headers['Authorization'] = `Bearer ${localStorage.getItem(
          'access_token'
        )}`;
        return axiosInstance(config);
      } catch (refreshError) {
        if (navigate) {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          navigate('/');
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
