import { biblioteca } from "../services/biblioteca.service.js";

export async function getContentController(req, res) {
  const result = await biblioteca.getContent(req.user, req.body);
  return res.status(200).json(result);
}

export async function addContentController(req, res) {
  const result = await biblioteca.addContent(req.user, req.body);
  return res.status(200).json(result);
}

export async function getGeneralStatistics(req, res) {
  const result = await biblioteca.getGeneralStatistics(req.body);
  return res.status(200).json(result);
}
