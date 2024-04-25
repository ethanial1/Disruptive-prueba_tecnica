import { instanceApi } from "./config";

export class Service {
  async getResource({url, method, data}) {
    return await instanceApi({
      url,
      data,
      method,
    })
  }

  async getTematicas() {
    try {
      const result = await this.getResource({
        method: 'GET',
        url: 'tematica/list'
      });
      if (!result.data?.success) return [];

      return result.data.payload;
    } catch (error) {
      return [];
    }
  }

  async getContenido() {
    try {
      const result = await this.getResource({
        method: 'GET',
        url: 'tematica/list'
      });

      return result.data;
    } catch (error) {
      return {success: false, message: error.toString()}
    }
  }
}
