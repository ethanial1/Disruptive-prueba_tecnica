import { hash, compare } from 'bcrypt';

/**
 * Elimina los caracteres especiales y regresa un string en minuscula.
 * @param {String} value
 */
export function vaciarCaracteres(value) {
  value = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  return value.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
}

export async function hashData(data) {
  try {
    const hashPassword = await hash(data, 10);
    return hashPassword;
  } catch (error) {
    return null;
  }
}

export async function compareHash(toCompare, hash) {
  try {
    return await compare(toCompare, hash);
  } catch (error) {
    return false;
  }
}
