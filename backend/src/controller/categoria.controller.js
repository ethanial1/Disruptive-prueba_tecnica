import { categoria } from "../services/categoria.service.js";

// categorias
export async function createCategoryController(req, res) {
  const result = await categoria.createCategory(req.body);
  return res.status(200).json(result);
}

export async function getCategoriesController(req, res) {
  const result = await categoria.getCategories();
  return res.status(200).json(result);
}

export async function removeCategoryController(req, res) {
  const result = await categoria.removeCategory(req.body.id);
  return res.status(200).json(result);
}

// tematricas
export async function createTematicaController(req, res) {
  const result = await categoria.createTematica(req.body);
  return res.status(200).json(result);
}
export async function getTematicasController(req, res) {
  const result = await categoria.getTematicas();
  return res.status(200).json(result);
}
