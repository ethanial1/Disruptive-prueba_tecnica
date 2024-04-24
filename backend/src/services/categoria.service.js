import { categoriaModel, tematicaModel } from '../models/index.js';
import { vaciarCaracteres } from '../utils/data.js';

class CategoriaService {
  async createCategory(data) {
    try {
      const nombre = data.nombre;

      const unombre = vaciarCaracteres(nombre);
      const ucategory = await categoriaModel.findOne({ unombre });
      if (ucategory) {
        return { success: false, message: 'La categoria ya está registrada' }
      }

      const newCategory = new categoriaModel({ nombre, unombre })
      await newCategory.save();

      return { success: true }
    } catch (error) {
      return { success: false }
    }
  }

  async getCategories() {
    try {
      const lista = await categoriaModel.find().select('nombre');
      return { payload: lista };
    } catch (error) {
      return { payload: [] };
    }
  }

  async removeCategory(id) {
    try {
      await categoriaModel.findByIdAndDelete(id)
      return { success: true }
    } catch (error) {
      return { success: false }
    }
  }

  async createTematica(data) {
    try {
      const { nombre, permisos } = data;
      const unombre = vaciarCaracteres(nombre);

      const utema = await tematicaModel.findOne({ unombre });
      if (utema) {
        return {success: false, message: 'La temática ya existe'};
      }

      const newTema = new tematicaModel({ nombre, unombre, permisos });
      await newTema.save();

      return { success: true };
    } catch (error) {
      return { success: false, message: error.toString() };
    }
  }

  async getTematicas() {
    try {
      const lista = await tematicaModel.find()
        .select('-_id unombre nombre imagen');
      return {success: true, payload: lista};
    } catch (error) {
      return {success: false, payload: []}
    }
  }
}

export const categoria = new CategoriaService();
