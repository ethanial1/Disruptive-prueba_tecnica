import { service } from '../services';

/**
 * -- Contenido
 * _id: string
 * categoria: string
 * contenido: string
 * credito: string
 */
let bibliotecaVault = [];

export const bibliotecaSlice = (set, get) => ({
  biblioteca: [],
  bibliotecaMessage: '',
  filterBibliotecaActive: '',

  getBiblioteca: async (uname, category) => {
    const result = await service.getContenido(uname, category);
    if (!result.success) return;

    set(() => ({biblioteca: result.payload, filterBibliotecaActive: ''}));
  },

  addContent: async (data) => {
    const active = get().tematica;

    data.tematica = active.unombre;
    const result = await service.addContenido(data);
    if (!result.success) {
      return set(() => ({bibliotecaMessage: result.message}));
    }

    set((state) => {
      const lista = state.biblioteca.concat(data);
      return { biblioteca: lista }
    })
  },

  filterBibliotecaByName: (name) => {
    name = name.toLowerCase();
    const regex = RegExp(name);

    const lista = get().biblioteca;

    if (!bibliotecaVault.length) {
      bibliotecaVault = lista;
    }

    const newList = bibliotecaVault.filter((item) => regex.test(item?.titulo?.toLowerCase()));
    set(() => ({biblioteca: newList, filterBibliotecaActive: name}));
  },

  cleanBibliotecaFilter: () => {
    const filter = get().filterBibliotecaActive;
    if (!filter) return;

    set(() => ({biblioteca: bibliotecaVault, filterBibliotecaActive: ''}))
  },

  filterBibliotecaByType: (type) => {
    type = type.toLowerCase();
    const lista = get().biblioteca;

    if (!bibliotecaVault.length) {
      bibliotecaVault = lista;
    }
    console.log(type)
    const newList = bibliotecaVault.filter((item) => item?.categoria === type);
    set(() => ({biblioteca: newList, filterBibliotecaActive: type}));
  }
})
