import { service } from "../services";
import { isEmailValid} from "../utils/data";

/**
 * -- User
 * username: string
 * email: string
 */

export const userSlice = (set) => ({
  user: null,
  message: '',
  authLoading: false,

  loginMethod: async (email, pass) => {
    set(() => ({message: "", authLoading: true}) )

    if (!isEmailValid(email) || !pass) {
      set(() => ({message: "Ingrese un correo/contraseña validos", authLoading: false}) )
      return;
    }

    const data = await service.login(email, pass);
    if (data.message) {
      set(() => ({message: data.message, authLoading: false}) )
      return;
    }

    const result = await service.getTematicas();
    set(() => ({user: {username: 'miguel', email: 'miguel@gmail.com'}, tematicas: result, authLoading: false }));
  },
  registerUser: async (username, email, pass, type) => {
    set(() => ({message: "", authLoading: true}) )
    if (!isEmailValid(email) || !pass || !username || !type) {
      set(() => ({message: "Ingrese un correo/contraseña validos", authLoading: false}) )
      return;
    }

    const data = await service.register(username, email, pass, type);
    if (data.message) {
      set(() => ({message: data.message, authLoading: false}) )
      return;
    }
    set(() => ({message: 'Registro exitoso', authLoading: false }));
  }
});
