import { categoriaModel } from '../models/index.js';
import { vaciarCaracteres } from '../utils/data.js';

export async function createCategory(data) {
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
