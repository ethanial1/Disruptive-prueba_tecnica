import { createCategory } from "../services/categoria.service.js";

export async function createCategoryController(req, res) {
  const result = await createCategory(req.body);
  return res.status(200).json(result);
}
