/**
 * Elimina los caracteres especiales y regresa un string en minuscula.
 * @param {String} value
 */
export function vaciarCaracteres(value) {
  value = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  return value.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
}
