import { contenidoModel } from "../models";

export async function biblioteca(data) {
  try {
    const orderBy = data.orderBy;
    const grupo = orderBy === 'tipo' ? 'tematica' : 'categoria';

    const result = await contenidoModel.aggregate([
      {
        $group: {
          _id: `$${grupo}`
        }
      }
    ])

    return { payload: result };
  } catch (error) {
    return { success: false };
  }
}
