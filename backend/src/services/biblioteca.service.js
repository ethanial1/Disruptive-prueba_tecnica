import { contenidoModel, tematicaModel } from "../models/index.js";

class BibliotecaService {
  async addContent(user, body) {
    try {
      const { tematica, categoria, contenido } = body;
      const temaData = await tematicaModel.findOne({
        _id: tematica,
        permisos: categoria
      });
      if (!temaData) {
        return {
          success: false,
          message: 'El tipo de contenido no se puede agregar.',
        };
      }

      const file = new contenidoModel({
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

      const lista = await contenidoModel.find(query).select('title contenido credito categoria')
      return {success: true, payload: lista};
    } catch (error) {
      return {success: false}
    }
  }
}

export const biblioteca = new BibliotecaService();
