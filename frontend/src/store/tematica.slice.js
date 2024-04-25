import { service } from '../services';

/**
 * -- Tematica
 * "nombre": string
 * "unombre": string
 * image: string
*/

/**
 * -- Contenido
 * _id: string
 * categoria: string
 * contenido: string
 * credito: string
 */

export const tematicaSlice = (set) => ({
  tematicas: [],
  statistics: {},

  tematica: {},
  biblioteca: [],

  getTematicas: async () => {
    const result = await service.getTematicas();
    if (!result.success) return;

    set(() => ({ tematicas: result.payload }));
  }
});

