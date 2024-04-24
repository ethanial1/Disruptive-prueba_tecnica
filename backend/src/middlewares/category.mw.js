export function newCategoryDTO(req, res, next) {
  const { nombre, permisos } = req.body;
  const erros = [];

  if (!nombre) erros.push('Nombre: Campo requerido');
  if (!permisos || !Array.isArray(permisos) || [].includes()) {
    erros.push('Permisos: Debe de incluir alguna de las opciones: imagen, video, texto en una lista')
  }

  if (erros.length) {
    return res.status(400).json({ success: false, payload: erros})
  }
  next();
}
