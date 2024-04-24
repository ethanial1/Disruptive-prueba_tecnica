import { tematicaModel } from '../models/index.js'
import { vaciarCaracteres } from '../utils/data.js';

export async function createTematica(data) {
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
