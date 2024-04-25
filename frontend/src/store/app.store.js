import { create } from 'zustand'
import { userSlice } from './user.slice';
import { tematicaSlice } from './tematica.slice';

export const useAppStore = create((...a) => ({
  ...userSlice(...a),
  ...tematicaSlice(...a),
}))
