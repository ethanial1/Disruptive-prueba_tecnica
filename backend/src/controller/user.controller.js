import { userService } from "../services/user.service.js";

export async function getUserDataContoller(req, res) {
  const result = await userService.getUserInfo(req.user.username);
  return res.status(200).json(result);
}
