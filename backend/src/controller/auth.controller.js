import { registerUser } from '../services/auth.service.js';

export async function login(req, res) {
  return res.status(200).json({success: true})
}

export async function registerUserController(req, res) {
  const response = await registerUser(req.body);
  return res.status(200).json(response);
}
