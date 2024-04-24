import { Middleware } from "./middlweare.js";

class CategoriaMiddleware extends Middleware {
  validateCreateJsonBody(body) {
    const { nombre, permisos } = body;
    const erros = [];

    if (!nombre) erros.push('Nombre: Campo requerido');
    if (!permisos || !Array.isArray(permisos)) {
      erros.push('Permisos: Debe de ser un arreglo de contenidos')
    }
    // imagen, video, texto en una lista
    return erros;
  }

  validateCreation(user, body) {
    const isUserValid = this.validatePermissionByUser(user, 'c');
    if (!isUserValid) return { success: false, message: 'Recurso no disponible '};

    const errorList = this.validateCreateJsonBody(body);
    if (errorList.length) return { success: false, payload: errorList};

    return null;
  }
}

const middleware = new CategoriaMiddleware();

export function newCategoryValidator(req, res, next) {
  const errorResult = middleware.validateCreation(req.user, req.body);
  if (errorResult) return res.status(400).json(errorResult);
  next();
}
