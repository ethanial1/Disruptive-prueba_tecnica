import { service } from "../services";
import { isEmailValid} from "../utils/data";

/**
 * -- User
 * username: string
 * email: string
 */

export const userSlice = (set) => ({
  user: null,
  authMessage: '',
  authLoading: false,

  loginMethod: async (email, pass) => {
    set(() => ({authMessage: "", authLoading: true}) )

    if (!isEmailValid(email) || !pass) {
      set(() => ({authMessage: "Ingrese un correo/contraseña validos", authLoading: false}) )
      return;
    }

    const data = await service.login(email, pass);
    if (data.message) {
      set(() => ({authMessage: data.message, authLoading: false}) )
      return;
    }

    const result = await service.getTematicas();
    set(() => ({user: {username: 'miguel', email: 'miguel@gmail.com'}, tematicas: result, authLoading: false }));
  }
});
