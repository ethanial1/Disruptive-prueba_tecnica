import { createTematica } from "../services/tematica.service.js";

export async function createTematicaController(req, res) {
  const result = await createTematica(req.body);
  return res.status(200).json(result);
}
