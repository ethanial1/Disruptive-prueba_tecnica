import { biblioteca } from "../services/biblioteca.service.js";

export async function bibliotectaController(req, res) {
  const result = await biblioteca(req.body);
  return res.status(200).json(result);
}
