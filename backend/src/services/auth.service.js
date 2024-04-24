import { userModel } from '../models/index.js'

export async function registerUser(data) {
  try {
    const { username, email, password, type } = data;
    const result = await userModel.find({
      $or: [{username}, {email}]
    })
    if (result.length) {
      return { success: false, message: 'El usuario / correo ya está registrado.' }
    }

    const newUser = new userModel({
      email,
      password,
      username,
      role: type,
    })

    await newUser.save();

    return { success: true };
  } catch (error) {
    return {success: false, message: error.toString()};
  }
}
