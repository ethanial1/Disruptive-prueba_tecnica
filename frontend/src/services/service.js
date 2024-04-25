import { aToken, rToken } from "../utils/storage";
import { instanceApi } from "./config";
import { baseURL } from "../utils/fetch_config";

export class Service {
  constructor() {
    this.setInterceptor();
  }

  setInterceptor() {
    instanceApi.interceptors.response.use(
      (res) => res,
      async (err) => {
        const originalConfig = err.config
        if (originalConfig.url !== 'auth/login' && err.response) {
          // Access Token was expired
          if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true

            try {
              await this.refreshToken()

              return instanceApi(originalConfig)
            } catch (error) {
              return Promise.reject(error)
            }
          }
        }

        return Promise.reject(err)
      }
    );
  }

  isTokenExist() {
    const accessToken = localStorage.getItem(aToken);
    const refreshToken = localStorage.getItem(rToken);

    return accessToken && refreshToken;
  }

  async refreshToken() {
    try {
      const tokensExist = this.isTokenExist();
      if (!tokensExist) throw new Error('');

      const token = localStorage.getItem(rToken);
      const rs = await fetch(baseURL + 'auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })

      if (rs.status !== 200) throw new Error()

      const json = await rs.json()
      localStorage.setItem(aToken, json.payload.accessToken);
      localStorage.setItem(rToken, json.payload.refreshToken);
    } catch (error) {
      localStorage.removeItem(aToken)
      localStorage.removeItem(rToken)
      window.location.href = '/'
    }
  }

  async getResource({url, method, data, token}) {
    const headers = {'Content-Type': 'application/json'};

    if (token) {
      const activeToken = localStorage.getItem(aToken);
      headers['Authorization'] = 'Bearer ' + activeToken;
    }

    return await instanceApi({
      url,
      data,
      method,
      headers,
    })
  }

  async login(email, password) {
    try {
      const result = await this.getResource({
        url: 'auth/login',
        method: 'POST',
        data: {email, password}
      });

      const data = result.data;
      if (!data?.success) {
        return {message: Array.isArray(data.payload) ? data.payload.join(',') : data.message};
      }

      localStorage.setItem(aToken, data.payload.accessToken);
      localStorage.setItem(rToken, data.payload.refreshToken);

      const user = await this.getUserInfo();

      return user
    } catch (error) {
      return {message: 'Ocurrio un error'};
    }
  }

  async register(username, email, password, type) {
    try {
      const result = await this.getResource({
        url: 'auth/register',
        method: 'POST',
        data: {username, email, password, type}
      });

      const data = result.data;
      if (!data?.success) {
        return {message: Array.isArray(data.payload) ? data.payload.join(',') : data.message};
      }

      return {success: true}
    } catch (error) {
      return {message: 'Ocurrio un error'};
    }
  }

  async getTematicas() {
    try {
      const result = await this.getResource({
        token: true,
        method: 'GET',
        url: 'tematica/list'
      });
      if (!result.data?.success) return [];

      return result.data.payload;
    } catch (error) {
      return [];
    }
  }

  async addTematica(data) {
    try {
      const result = await this.getResource({
        data,
        token: true,
        method: 'POST',
        url: 'tematica/add-one'
      });

      return result.data;
    } catch (error) {
      return {message: 'Ocurrio un error'}
    }
  }

  async getContenido(tematica, category) {
    try {
      const result = await this.getResource({
        token: true,
        method: 'POST',
        url: 'biblioteca',
        data: {tematica, category}
      });

      return result.data;
    } catch (error) {
      return {success: false, message: error.toString()}
    }
  }

  /**
   *
   * @param {tematica, categoria, contenido} data
   * @returns
   */
  async addContenido(data) {
    try {
      const result = await this.getResource({
        token: true,
        method: 'POST',
        url: 'biblioteca/add',
        data,
      });

      return result.data;
    } catch (error) {
      return {success: false, message: error.toString()}
    }
  }

  async getContentStatistic(data) {
    try {
      const result = await this.getResource({
        token: true,
        method: 'POST',
        url: '/biblioteca/static',
        data,
      });

      return result.data;
    } catch (error) {
      return {success: false, message: error.toString()}
    }
  }

  async getUserInfo() {
    try {
      const result = await this.getResource({
        token: true,
        method: 'POST',
        url: '/user/info',
      });

      return result.data;
    } catch (error) {
      return {success: false, message: error.toString()}
    }
  }
}
