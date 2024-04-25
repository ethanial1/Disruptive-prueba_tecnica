import { service } from '../services';

/**
 * -- Tematica
 * "nombre": string
 * "unombre": string
 * image: string
*/

let tematicasVault = [];

export const tematicaSlice = (set, get) => ({
  tematicas: [],
  filterTematicaActive: '',
  statistics: [],
  requestStatus: false,

  tematica: null,

  addTematica: async (data) => {
    set(() => ({requestStatus: true}));
    const result = await service.addTematica(data);
    if (!result.success) {
      return;
    }


    set((state) => {
      const lista = state.tematicas.concat([result.payload]);
      return {requestStatus: false, tematicas: lista}
    })
  },

  getTematicas: async () => {
    const result = await service.getTematicas();
    if (!result.success) return;

    set(() => ({ tematicas: result.payload }));
  },

  setTematicaActiva: (data) => {
    set(() => ({tematica: data}))
  },

  filterTematicaByName: (name) => {
    name = name.toLowerCase();
    const regex = RegExp(name);

    const lista = get().tematicas;
    if (!lista.length) return;

    if (!tematicasVault.length) {
      tematicasVault = lista;
    }

    const newList = tematicasVault.filter((item) => regex.test(item.nombre.toLowerCase()));
    set(() => ({tematicas: newList, filterTematicaActive: name}));
  },

  cleanTematicaFilter: () => {
    const filter = get().filterTematicaActive;
    if (!filter) return;

    set(() => ({tematicas: tematicasVault, filterTematicaActive: ''}))
  },
  getStatistics: async (tematica) => {
    const result = await service.getContentStatistic({tematica});
    if (!result?.success) {
      return set(() => ({statistics: []}));
    }

    set(() => ({statistics: result.payload}))
  }
});

