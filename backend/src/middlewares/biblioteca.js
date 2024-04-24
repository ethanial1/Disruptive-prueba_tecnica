import { Middleware } from "./middlweare.js";

class Biblioteca extends Middleware {
  validateFilter(body) {
    const { tematica, categoria } = body;
    const errors = [];

    if (typeof tematica !== 'string' || !tematica?.trim()) {
      errors.push('No se puede hacer la búsqueda, se debe de proporcionar la temática');
    }

    if (categoria && ( typeof categoria !== 'string' || categoria.isEmpty())) {
      errors.push('La categoria debe de ser un texto válido');
    }

    if (errors.length) return {success: false, payload: errors};
    return null;
  }
}

const middlweare = new Biblioteca();

export function getContentValidator(req, res, next) {
  const errors = middlweare.validateFilter(req.body);
  if (errors) return res.status(400).json(errors);
  next();
}
