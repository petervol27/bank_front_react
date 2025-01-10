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
    alert('To keep your information safe please log in again');
    throw error;
  }
};

export const validateToken = async (token) => {
  try {
    const response = await axios.get(`${HOST}users/validate/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.valid) {
      return;
    }
  } catch (error) {
    await refreshAccessToken();
  }
};

export const checkLogin = async () => {
  const access = localStorage.getItem('access_token');
  try {
    if (!access) {
      throw new Error('no access token');
    }
    await validateToken(access);
    return;
  } catch (error) {
    return false;
  }
};
// Axios instance to control the token
let navigate;
export const setNavigate = (navigateFunc) => {
  navigate = navigateFunc;
};

const axiosInstance = axios.create({
  baseURL: 'https://bank-zdpd.onrender.com/',
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
          navigate('/login');
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
