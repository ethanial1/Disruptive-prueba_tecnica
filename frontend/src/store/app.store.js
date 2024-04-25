import { create } from 'zustand'
import { userSlice } from './user.slice';
import { tematicaSlice } from './tematica.slice';
import { bibliotecaSlice } from './biblioteca.slice';

export const useAppStore = create((...a) => ({
  ...userSlice(...a),
  ...tematicaSlice(...a),
  ...bibliotecaSlice(...a),
}))
