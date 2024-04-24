import { userModel } from '../models/index.js'

export async function validateUser(payload, done) {
  try {
    const user = await userModel.findById(payload.id);
    if (!user) return done(null, false);

    return done(null, {
      id: user._id,
      role: user.role,
      permisos: user.permisos,
      username: user.username,
    });
  } catch (error) {
    console.log(error);
    return done(null, false);
  }
}
