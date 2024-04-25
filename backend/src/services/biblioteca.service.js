import { contenidoModel, tematicaModel } from "../models/index.js";

class BibliotecaService {
  async addContent(user, body) {
    try {
      const { tematica, categoria, contenido, titulo } = body;
      const temaData = await tematicaModel.findOne({
        unombre: tematica,
        permisos: categoria
      });
      if (!temaData) {
        return {
          success: false,
          message: 'El tipo de contenido no se puede agregar.',
        };
      }

      const file = new contenidoModel({
        titulo,
        categoria,
        contenido,
        createdBy: user.id,
        credito: user.username,
        tematica: temaData.unombre,
      })

      await file.save();
      return {success: true};
    } catch (error) {
      console.log(error);
      return {success: false}
    }
  }

  async getContent(user, body) {
    try {
      const { tematica, categoria } = body;
      const query = { tematica };

      if (categoria) query.categoria = categoria;

      const lista = await contenidoModel.find(query).select('titulo contenido credito categoria')
      return {success: true, payload: lista};
    } catch (error) {
      return {success: false}
    }
  }

  async getGeneralStatistics(body) {
    try {
      const tematica = body.tematica;
      const querys = [{$group: {_id: "$categoria", count: {$sum: 1}}}];

      if (tematica) {
        querys.unshift({ "$match": { "tematica": tematica }})
      }

      const result = await contenidoModel.aggregate(querys);

      return {success: true, payload: result}
    } catch (error) {
      return {success: false}
    }
  }
}

export const biblioteca = new BibliotecaService();
