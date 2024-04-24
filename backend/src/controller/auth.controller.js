import { login, registerUser } from '../services/auth.service.js';

export async function loginController(req, res) {
  const result = await login(req.body);
  return res.status(200).json(result);
}

export async function registerUserController(req, res) {
  const response = await registerUser(req.body);
  return res.status(200).json(response);
}
