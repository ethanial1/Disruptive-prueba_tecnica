import { userModel } from '../models/index.js'

class UserService {
  async getUserInfo(username) {
    try {
      const user = await userModel.findOne({username}).select('-_id username email role');

      return {success: true, payload: user}
    } catch (error) {
      return {success: false}
    }
  }
}

export const userService = new UserService();
